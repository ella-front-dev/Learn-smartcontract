let express = require("express");
let router = express.Router();
const lightwallet = require("eth-lightwallet");
const fs = require("fs");

// TODO : lightwallet 모듈을 사용하여 랜덤한 니모닉 코드를 얻습니다.
router.post("/newMnemonic", async (req, res) => {
  //  mnemonic 변수를 만듭니다.
  let mnemonic;
  // (응답) mnemonic 변수에 lightwallet.keystore.generateRandomSeed()을 담아, mnemonic을 응답으로 전송합니다.
  try {
    mnemonic = lightwallet.keystore.generateRandomSeed();
    res.json({ mnemonic }).status(200);
  } catch (error) {
    // (에러) 에러를 응답합니다.
    res.status();
    console.log(error);
  }
});

// TODO : 니모닉 코드와 패스워드를 이용해 keystore와 address를 생성합니다.
router.post("/newWallet", async (req, res) => {
  // password 와 mnemonic 을 입력값으로, 서버에 요청을 보냅니다.
  // password 와 mnemonic 변수를 만듭니다.
  // 요청에 포함되어 있는 password 와 mnemonic을 각 변수에 할당합니다.
  let password = req.body.password;
  let mnemonic = req.body.mnemonic;

  try {
    let options = {
      password: password,
      seedPhrase: mnemonic,
      hdPathString: "m/0'/0'/0'",
    };
    lightwallet.keystore.createVault(options, function (err, data) {
      data.keyFromPassword(password, function (err, pwDerivedKey) {
        data.generateNewAddress(pwDerivedKey, 1);
        let address = (data.getAddresses()).toString();
        let keystore = data.serialize();

        res.json({ keystore: keystore, address: address });
      });
    });

    // (응답) lightwallet.keystore.createVault를 사용하여 키스토어를 생성합니다.
    // 첫번째 인자(options)에는 password, seedPhrase, hdPathString을 담습니다.
    // 두번째 인자(callback)에는 키스토어를 인자로 사용하는 함수를 만듭니다.
    // eth-lightwallet 모듈의keystore.keyFromPassword(password, callback) 내장 함수를 사용합니다.
    // 첫번째 인자에는 password, 두번째 인자(callback)에는 pwDerivedKey를 인자로 사용하는 함수를 만듭니다.
    // 두번째 콜백함수가 실행되면, eth-lightwallet 모듈의 keystore.generateNewAddress(pwDerivedKey, [num])을 이용해 새로운 주소 생성 함수를 실행합니다.
    // address 변수를 만들고, keystore.getAddresses()을 문자열로 할당합니다.
    // keystore 변수를 만들고, keystore.serialize()을 할당합니다.
    // 위에서 만들어준 변수를 응답으로 전송합니다.
  } catch (error) {
    console.log('newWallet : ',error);
    // (오류) 에러를 응답합니다.
  }
});

// TODO : keystore를 로컬에 저장하는 코드
router.post("/newWalletLocal", async (req, res) => {
  let password = req.body.password;
  let mnemonic = req.body.mnemonic;

  try {
    let options = {
      password: password,
      seedPhrase: mnemonic,
      hdPathString: "m/0'/0'/0'",
    };
    lightwallet.keystore.createVault(options, function (err, data) {
      data.keyFromPassword(password, function (err, pwDerivedKey) {
        data.generateNewAddress(pwDerivedKey, 1);
        let address = (data.getAddresses()).toString();
        let keystore = data.serialize();
        // 함수 keyFromPassword의 콜백 함수에서, 응답대신 fs.writeFile 사용
        // 첫번째 인자에는 .json 형식의 파일이름을, 두번째 인자에는 keystore 을 입력
        // 세번째 인자에는 응답에 대한 콜백 함수를 입력
        // 로컬 서버에 파일을 저장하기 때문에, 응답으로는 성공 또는 실패 메세지만 전송
        fs.writeFile('keystore.json', keystore, function(err){
           if(!err){
            res.status(200).json({ address: address, message: "성공"});
           }else{
            res.status(999).json({ message: "실패"});
           }
        })
      });
    });

  } catch (error) {
    console.log('newWallet : ',error);
  }
});


module.exports = router;

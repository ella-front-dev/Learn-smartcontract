# 니모닉 지갑 만들기
## Getting Started
```shell
# 실행에 필요한 모듈 설치
  $ npm install

# 실행에 로컬 서버 실행
  $ npm run start
```

<br/>

## Set package
```shell
  {
    "eth-lightwallet": "^4.0.0",
  }
```
['eth-lightwallet']('https://github.com/ConsenSys/eth-lightwallet#readme')모듈을 사용해서 지갑 개발한다.

<br/>

## 기능 개발
1. 랜덤한 니모닉 코드를 생성
`keystore.generateRandomSeed()`를 이용하여 니모닉 코드를 생성

2. 니모닉을 시드로 키스토어를 생성
```js
keyFromPassword(password, function (err, pwDerivedKey) {
  ks.generateNewAddress(pwDerivedKey, 1);
  let address = (ks.getAddresses()).toString();
  let keystore = ks.serialize();
});
```

3. fs 모듈을 이용한 키스토어 로컬 저장
```js
  const fs = require("fs");

  fs.writeFile('wallet.json',keystore,function(err,data){
    if(err) {
      res.json({code:999,message:"실패"});
    } else {
      res.json({code:1,message:"성공"});
    }
  });
```


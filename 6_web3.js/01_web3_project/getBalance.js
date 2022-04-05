const dotenv = require("dotenv");
dotenv.config();

// getBalance.js
const Web3 = require('web3');
const rpcURL = `https://ropsten.infura.io/v3/${process.env.key}`;  // 원격 이더리움 노드에 접속할 수 있는 주소


const web3 = new Web3(rpcURL); // web3 객체 생성

const account = "0x671f45B9A8B98dA9EE0a2181E48B42153D9aCc42";

// 계좌 잔금 확인 
web3.eth.getBalance(account)
.then((bal) => {
  console.log("지갑 ${account}의 잔액은... ${bal} wei 입니다.");
  return web3.utils.fromWei(bal, "ether"); // web3.utils.fromWei 를 사용해 ether 단위로 변경
})
.then((eth) => {
  console.log(`이더 단위로는 ${eth} ETH 입니다.`);
});


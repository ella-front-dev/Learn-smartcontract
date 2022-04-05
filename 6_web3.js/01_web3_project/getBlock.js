const dotenv = require("dotenv");
dotenv.config();

const Web3 = require('web3');
const rpcURL = `https://ropsten.infura.io/v3/${process.env.key}`;

const web3 = new Web3(rpcURL); // web3 객체 생성

// 블록 조회
const blockNum = "12161020";

web3.eth.getBlock(blockNum).then((obj) => {
  console.log(obj);
});

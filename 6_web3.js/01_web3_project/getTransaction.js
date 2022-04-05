const dotenv = require("dotenv");
dotenv.config();

const Web3 = require('web3');
const rpcURL = `https://ropsten.infura.io/v3/${process.env.key}`;

const web3 = new Web3(rpcURL); // web3 객체 생성


// 트랜젝션 조회
const txId = "0x2cdc5cad342385b00885dfea8b73b893d8484cf8c5807bc561bb5067438f60b4";
const blockNum = "12161020";

web3.eth.getTransaction(txId)
	.then((obj) => {
	  console.log('Transaction : ', obj);
	});

// 트랜젝션 Pending list 조회
web3.eth.getPendingTransactions()
.then(console.log)
// .then((arr)=> console.log('PendingTransactions: ', arr))
.catch(err => console.log('ErrorPendingTransactions: ', err));

// 트랜젝션 Block 
web3.eth.getTransactionFromBlock(blockNum, 0)
.then((obj)=> console.log('TransactionFromBlock: ', obj));

// 완료된 Transition Receipt
web3.eth.getTransactionReceipt(txId)
	.then((obj) => {
	  console.log('TransactionReceipt : ',obj);
	})
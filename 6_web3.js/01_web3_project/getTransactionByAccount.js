const dotenv = require("dotenv");
dotenv.config();

const Web3 = require('web3');
const rpcURL = `https://ropsten.infura.io/v3/${process.env.key}`;

const web3 = new Web3(rpcURL); // web3 객체 생성

// 계좌 조회 
const account = "0x671f45B9A8B98dA9EE0a2181E48B42153D9aCc42";
const startBlock = 12117724;
const endBlock = 12117731;

/* for에 await 가 안되서 promise 에러가 난다. return 값 제대로 못 뽑아옴 */
// async function getTransactionsByAccount(account, startBlock, endBlock){
//   let result = []
//   try {
//     for(let i = startBlock; i <= endBlock; i++ ){
//       let block = await web3.eth.getBlock(i);
//       let transactions = block.transactions;
//       if (block != null && transactions != null) {
//         for (let txHash of block.transactions) {
//           let tx = await web3.eth.getTransaction(txHash);
//           if (account == tx.to || account == tx.from) {
//             result.push(tx)
//             console.log('result: ', result)
//           }
//         }
//       }
//     }
//     return result
//   }catch(err){
//     console.log(err)
//   }

// }

//console.log(getTransactionsByAccount(account, startBlock, endBlock))

/* for await 사용하기 */


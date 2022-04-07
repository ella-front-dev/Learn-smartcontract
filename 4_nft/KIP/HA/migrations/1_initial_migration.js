const Migrations = artifacts.require('Migrations');
const EllaNFT = artifacts.require('EllaNFT.sol'); // 배포할 컨트렉트 파일 추가

module.exports = function (deployer) {
	deployer.deploy(Migrations);
	deployer.deploy(EllaNFT); // 배포할 컨트렉트 파일 배포에 추가
};
# 2. 솔리디티
## contract practice
- `solc_practice` 파일에 간단하게 샘플 코드 구현

<br/>

## Remix를 이용해서 로컬에서 컨트렉트 구현
[Remixd](https://remix.ethereum.org) : 웹 브라우저에서 동작하는 IDE
[Remix-project 공식 문서](https://github.com/ethereum/remix-project/tree/master/libs/remixd)

아래 방법은 로컬에 있는 폴더와 Remix IDE를 웹소켓 통신 방식으로 연결하는 것이다. Remix IDE가 바뀌어도 로컬에 자동 저장된다. 백업하기에 좋다.

``` shell
# 1. 'remixd_practice' 폴더 생성

# 2. package.json 생성
npm init

# 3. remixd 설치
npm install -g @remix-project/remixd

# 4. remixd_practice > [구현파일].sol 코드 저장

# 5. 웹소켓 연결
 remixd -s [remixd_practice 폴더의 절대경로] --remix-ide https://remix.ethereum.org

```


### Remix와 로컬 서버 연결
1. `solidity_practice` 폴더 만들어서 `helloWorld.sol`파일 생성

### 가위바위보 게임 구현

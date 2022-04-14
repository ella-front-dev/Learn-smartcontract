# 2. Solidity
## contract practice
- `solc_practice` 파일에 간단하게 샘플 코드 구현

<br/>

## Setting Environment
1. Remix 사용
2. Remix를 로컬과 연결해서 구현

### Remix를 이용해서 로컬에서 컨트렉트 구현
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

## 가위바위보 게임 구현
1. 사용자와 게임 구조체 생성
- 플레이어 구조체 만들기
- 게임 구조체 만들기

2. createRoom - 게임 생성

3. joinRoom - 방 참가
- compareHands() - 게임 결과 업데이트

4. payout - 베팅 금액 송금

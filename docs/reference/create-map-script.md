# createMapScript

클라이언트 아이디 발급에서 발급받은 `ncpClientId`를 사용해 NAVER 지도 API v3을 로드해야 합니다. 공공기관용의 경우 `govClientId`를 금융기관용의 경우 `finClientId`를 사용하여 호출해주세요.


## Props

| Name        |      Type      |  Default | Description |
| :-----------: | :-----------: | :-----------: | :-----------: |
| clientId      | `string?`                    | -      | 네이버 클라우드 플랫폼에서 발급받은 클라이언트 아이디 |
| category      |   `"gov" \| "ncp" \| "fin"`    |   `"ncp"`  | 사용할 클라이언트 종류 |


- [지도 기본 예제](/guide/tutorial-1-map-simple)
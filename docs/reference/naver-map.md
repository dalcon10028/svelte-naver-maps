# NaverMap
지도 컴포넌트 입니다. 컴포넌트를 생성할 때 script를 삽입하고 지도를 생성합니다.

## Props

| Name        |      Type      |  Default | Description |
| :-----------: | :-----------: | :-----------: | :-----------: |
| mapOptions      | [`MapOptions`](#mapoptions)                    | -      | 지도 초기화 설정 |


## Type Definitions

### MapOptions
[`naver.maps.MapOptions`](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.html#.MapOptions)와 [ScriptOptions](#scriptoptions)를 상속받아 지도를 생성합니다.

추가 옵션은 다음과 같습니다.

| Name        |      Type      |  Default | Description |
| :-----------: | :-----------: | :-----------: | :-----------: |
| clientId      | `string?`                    | -      | 네이버 지도에서 발급받은 ClinetId |
| category      |   `"gov" \| "ncp" \| "fin"`    |   `"ncp"`  | 사용할 클라이언트 종류 |

### ScriptOptions
네이버 지도 스크립크 초기화 시 사용할 수 있는 옵션 입니다.

| Name        |      Type      |  Default | Description |
| :-----------: | :-----------: | :-----------: | :-----------: |
| clientId      | `string?`                    | -      | 네이버 지도에서 발급받은 ClinetId |
| category      |   `"gov" \| "ncp" \| "fin"`    |   `"ncp"`  | 사용할 클라이언트 종류 |


# Base Type Definitions

공통으로 사용되는 기반 타입 정보입니다.

## Point
위도, 경도 좌표를 정의합니다.

| Name        |      Type      | Description |
| :-----------: | :-----------: | :-----------: |
| latitude      | `number` | 위도 |
| longitude      | `number` | 경도 |

## Bounds
남서쪽과 북동쪽의 위/경도 좌표가 설정돼 있는 직사각형의 지리적 영역(이하 좌표 경계)을 정의합니다.

| Name        |      Type      | Description |
| :-----------: | :-----------: | :-----------: |
| minPoint      | [`Point`](#point) | 최소 좌표 |
| maxPoint      | [`Point`](#point) | 최대 좌표 |
# NaverCircle

지도 위에 올리는 원 모양의 폴라곤 컴포넌트 입니다.

## Props

| Name        |      Type      |  Default | Description |
| :-----------: | :-----------: | :-----------: | :-----------: |
| latitude      | `number`                    | -      | 원의 중심점 위도 |
| longitude      | `number`                    | -      | 원의 중심점 경도 |
| circleOptions      | [`CircleOptions`](#circleoptions) | -      | - |


## Type Definitions

### CircleOptions
[`naver.maps.CircleOptions`](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Circle.html#~CircleOptions)에서
원의 중심점 좌표인 `latitude`, `longitude`와 도형이 그려질 지도 객체인 `map` 필드를 제외한 제외한 객체입니다.
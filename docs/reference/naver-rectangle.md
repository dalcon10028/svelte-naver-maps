# NaverRectangle

지도 위에 올리는 사각형 모양의 폴라곤 컴포넌트 입니다.

## Props

| Name        |      Type      |  Default | Description |
| :-----------: | :-----------: | :-----------: | :-----------: |
| minLatitude      | `number`                    | -      | 직사각형의 최소 위도 |
| minLongitude      | `number`                    | -      | 직사각형의 최소 경도 |
| minLatitude      | `number`                    | -      | 직사각형의 최대 위도 |
| minLongitude      | `number`                    | -      | 직사각형의 최대 경도 |
| rectangleOptions      | [`RectangleOptions`](#rectangleoptions) | -      | - |


## Type Definitions

### RectangleOptions
[`naver.maps.RectangleOptions`](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Rectangle.html#~RectangleOptions)에서 직사각형의 좌표 경계인 `bounds`와 도형이 그려질 지도 객체인 `map` 필드를 제외한 제외한 객체입니다.


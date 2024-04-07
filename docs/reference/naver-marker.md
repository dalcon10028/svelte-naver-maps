# NaverMarker

지도 위에 올리는 마커 컴포넌트 입니다.

## Props

| Name        |      Type      |  Default | Description |
| :-----------: | :-----------: | :-----------: | :-----------: |
| latitude      | `number`                    | -      | 마커를 표시할 위도 |
| longitude      | `number`                    | -      | 마커를 표시할 경도 |
| markerOptions      | [`MarkerOptions`](#markeroptions) | -      | - |



## Type Definitions

### MarkerOptions
[`naver.maps.MarkerOptions`](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html#~MarkerOptions)에서
마커의 위치 정보인 `position`과 도형이 그려질 지도 객체인 `map` 필드를 제외한 제외한 객체입니다.


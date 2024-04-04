# NaverMarker

지도 위에 올리는 정보 창 컴포넌트 입니다.

## Props

| Name        |      Type      |  Default | Description |
| :-----------: | :-----------: | :-----------: | :-----------: |
| open      | `boolean`                    | `false`      | 초기화시 정보창 열기 옵션 |
| infoWindowOptions      | [`InfoWindowOptions`](#infowindowoptions) | -      | - |



## Type Definitions

### InfoWindowOptions
[`naver.maps.InfoWindowOptions`](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html#~MarkerOptions)에서
마커의 위치 정보인 `position`와 정보 창의 내용인 `content`를 제외한 객체입니다.
위치 정보는 마커를 통해서 얻고, 정보 창의 내용은 `slot`을 통해서 채워넣습니다.


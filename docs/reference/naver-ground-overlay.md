# NaverGroundOverlay

지상 오버레이는 특정 이미지를 지도의 특정 위치(좌표 경계)에 타일처럼 배치하는 오버레이입니다. 따라서 사용자가 지도 화면을 드래그하거나 확대/축소하면 타일과 동일하게 동작합니다.

## Props

| Name        |      Type      |  Default | Description |
| :-----------: | :-----------: | :-----------: | :-----------: |
| url      | `number`                    | -      | 이미지 URL |
| bounds      | [`Bounds`](./base-type-defs#bounds)                    | -      | 좌표 경계 |
| groundOverlayOptions      | [`GroundOverlayOptions`](#groundOverlayOptions) | -      | - |


## Type Definitions

### GroundOverlayOptions
[`naver.maps.RectangleOptions`](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.GroundOverlay.html#~GroundOverlayOptions)에서 지도 객체인 `map` 필드를 제외한 제외한 객체입니다.

### Examples
- [지상 오버레이 표시하기](../guide/tutorial-ground-overlay)
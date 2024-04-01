# 이미지 아이콘 사용하기

특정 이미지를 마커 아이콘으로 사용하는 예제입니다.

<iframe src="https://d4lnwj-5173.csb.app/tutorial-3-marker-image-icon" width="100%" height=400>
  <p>사용 중인 브라우저는 iframe을 지원하지 않습니다.</p>
</iframe>

```svelte
<script>
import { NaverMap, NaverMarker } from "svelte-naver-maps";
	
const mapOptions = {
	clientId: "YOUR_NAVER_MAP_CLIENT_ID",
	width: "100%",
	height: "400px",
	latitude: 37.3849483,
	longitude: 127.1229117,
};
</script>

<NaverMap mapOptions={mapOptions}>
	<NaverMarker 
		latitude={37.3849483} 
		longitude={127.1229117} 
		markerOptions={{
		icon: {
			url: "https://navermaps.github.io/maps.js.ncp/docs/img/example/sally.png",
			size: { width: 50, height: 52 },
			origin: { x: 0, y: 0 },
        	anchor: { x: 11, y: 35 },
		}
		}}
	/>
</NaverMap>
```
# 마커 표시하기

네이버 그린팩토리 위치에 기본 마커를 표시하는 예제입니다.

```svelte
<script>
import { NaverMap, NaverMarker, createMapScript } from "svelte-naver-maps";
	
createMapScript({ clientId: "YOUR_NAVER_MAP_CLIENT_ID" });

const mapOptions = {
		width: "100%",
		height: "400px",
		latitude: 37.3595704,
		longitude: 127.105399,
	};
</script>

<NaverMap mapOptions={mapOptions}>
	<NaverMarker 
		latitude={37.3595704} longitude={127.105399} 
	/>
</NaverMap>
```


<iframe src="https://codesandbox.io/p/devbox/gallant-rubin-d4lnwj?embed=1&file=%2Fsrc%2Froutes%2Ftutorial-1-marker-simple%2F%2Bpage.svelte"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="gallant-rubin-d4lnwj"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
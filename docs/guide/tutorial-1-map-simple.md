# 지도 기본 예제

지도를 생성하는 가장 기본적인 예제입니다. 지도 옵션을 설정하지 않으면 다음과 같이 서울 시청을 중심으로 하는 지도가 생성됩니다.

```svelte
<script>
import { NaverMap } from "svelte-naver-maps";

</script>

<NaverMap
  mapOptions={{
    clientId: "YOUR_NAVER_MAP_CLIENT_ID",
    width: "100%",
    height: "400px",
  }}
/>
```


<iframe src="https://codesandbox.io/p/devbox/gallant-rubin-d4lnwj?embed=1&file=%2Fsrc%2Froutes%2F%2Bpage.svelte"
  style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
  title="gallant-rubin-d4lnwj"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
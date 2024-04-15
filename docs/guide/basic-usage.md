# 기본 사용법

```svelte
<script>
import { NaverMap, createMapScript } from "svelte-naver-maps";

createMapScript({ clientId: "YOUR_NAVER_MAP_CLIENT_ID" });

</script>

<NaverMap mapOptions={{ width: "100%", height: "400px" }}/>
```
<script lang="ts">
import { NaverMap, NaverMarker, NaverInfoWindow } from "$lib";

let open: boolean = true;

</script>

<NaverMap
  mapOptions={{
    clientId: "tew0f0bytg",
    width: "100%",
    height: "400px",
    // 37.3595704, 127.105399
    latitude: 37.3595704,
    longitude: 127.105399,
  }}
>
  <NaverMarker
    on:click={() => {
      open = !open;
    }}
    latitude={37.3595704}
    longitude={127.105399}
    markerOptions={{
      icon: {
        url: "https://navermaps.github.io/maps.js.ncp/docs/img/example/sally.png",
        size: { width: 22, height: 35 },
      }
    }}>
      <NaverInfoWindow open={open}>
        <div>
          <h1>InfoWindow</h1>
          <p>Content</p>
        </div>
      </NaverInfoWindow>
    </NaverMarker>
</NaverMap>
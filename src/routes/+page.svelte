<script lang="ts">
import { NaverMap, NaverMarker, NaverInfoWindow } from "$lib";

let open: boolean = true;

const onMarkerClick = () => {
  open = !open;
};

</script>

<NaverMap
  mapOptions={{
    clientId: "tew0f0bytg",
    width: "100%",
    height: "400px",
    latitude: 37.3595704,
    longitude: 127.105399,
  }}
>
  <NaverMarker on:click={onMarkerClick} latitude={37.3595704} longitude={127.105399}>
      <NaverInfoWindow open={open}>
        <div>
          <h1>InfoWindow</h1>
          <p>Content</p>
        </div>
      </NaverInfoWindow>
    </NaverMarker>
</NaverMap>
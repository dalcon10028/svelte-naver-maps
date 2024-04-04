<script lang="ts">
import { NaverMap, NaverCircle } from "$lib";

let open: boolean = true;

const onMarkerClick = () => {
  open = !open;
};

const mapOptions = {
	clientId: "tew0f0bytg",
	width: "100%",
	height: "400px",
	latitude: 37.3849483,
	longitude: 127.1229117,
  zoom: 8,
};

const circleOptions = {
  radius: 20000,
  fillColor: 'crimson',
  fillOpacity: 0.8
};

</script>

<NaverMap mapOptions={mapOptions}>
  <NaverCircle latitude={37.3849483} longitude={127.1229117} circleOptions={circleOptions} />
</NaverMap>

<style>
  .iw_inner {
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
</style>
<script lang="ts">
import { NaverMap, NaverCircle, NaverEllipse } from "$lib";

let open: boolean = true;

const onMarkerClick = () => {
  open = !open;
};

const mapOptions = {
	clientId: "tew0f0bytg",
	width: "100%",
	height: "400px",
	latitude: 37.3595953,
	longitude: 127.1053971,
  zoom: 8,
};

const circleOptions = {
  radius: 20000,
  fillColor: 'crimson',
  fillOpacity: 0.8
};

const ellipseOptions = {
  strokeColor: 'yellowgreen',
  strokeOpacity: 1,
  strokeWeight: 3,
  fillColor: 'yellowgreen',
  fillOpacity: 0.3
};

</script>

<NaverMap mapOptions={mapOptions}>
  <NaverCircle latitude={37.3849483} longitude={127.1229117} circleOptions={circleOptions} />
  <NaverEllipse minLatitude={37.1793196} minLongitude={127.6795594} maxLatitude={37.5398662} maxLongitude={128.4312422} ellipseOptions={ellipseOptions} />
</NaverMap>
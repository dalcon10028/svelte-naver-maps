<script lang="ts">
import { NaverMap, NaverMarkerCluster, NaverMarker, createMapScript } from "$lib";

createMapScript({ clientId: "tew0f0bytg" });

const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

const mapOptions = {
	width: "100%",
	height: "400px",
	latitude: 36.634249797,
	longitude: 127.129160067,
  zoom: 13,
};

const LATITUDE = 36.634249797;
const LONGITUDE = 127.129160067;

const markerPoints = range(0, 200).map((i) => ({
  latitude: LATITUDE + Math.random() - 1,
  longitude: LONGITUDE + Math.random() - 0.5,
}));
</script>

<NaverMap mapOptions={mapOptions}>
  <NaverMarkerCluster>
    {#each markerPoints as { latitude, longitude }, i}
      <NaverMarker key={i} latitude={latitude} longitude={longitude} />
    {/each}
  </NaverMarkerCluster>
</NaverMap>
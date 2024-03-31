<script lang="ts">
import { onMount } from "svelte";
import { mapInstance } from "../stores/index.js";
import type { MapOptions } from "../types/index.js";
import { createMapScript } from "../utils/index.js"

export let mapOptions: MapOptions;

let mapElement: HTMLDivElement;

const initMap = () => {
  mapInstance.set(new window.naver.maps.Map(mapElement, {
    ...mapOptions,
    center: mapOptions.latitude && mapOptions.longitude
      ? new window.naver.maps.LatLng(mapOptions.latitude, mapOptions.longitude)
      : undefined,
  }));
}

onMount(() => {
  console.log("mapOptions", mapOptions);
  window.naver ? initMap() : createMapScript({
    clientId: mapOptions.clientId,
    category: mapOptions.category,
  }, initMap);
})
</script>

<div 
  bind:this={mapElement}
  style:width={mapOptions.width} 
  style:height={mapOptions.height}
  {...$$restProps}>
  <slot />
</div>
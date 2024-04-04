<script lang="ts">
import { createEventDispatcher, onDestroy, onMount, setContext } from "svelte";
import { createMapScript } from "../utils/index.js"
import { UI_MAP_EVENT } from "$lib/constants/event.js";
import { get, writable } from "svelte/store";
import type { MapContext, MapOptions } from "../types/index.js";

export let mapOptions: MapOptions;

let mapElement: HTMLDivElement;
const mapInstance = writable<naver.maps.Map>();

const dispatcher = createEventDispatcher();

setContext<MapContext>("map", { mapInstance });

const initMap = () => {
  mapInstance.set(new window.naver.maps.Map(mapElement, {
    ...mapOptions,
    center: mapOptions.latitude && mapOptions.longitude
      ? new window.naver.maps.LatLng(mapOptions.latitude, mapOptions.longitude)
      : undefined,
  }));
  
  UI_MAP_EVENT.forEach((eventName) => {
    get(mapInstance).addListener(eventName, (e) => {
      dispatcher(eventName, e);
    });
  });

  dispatcher("load", get(mapInstance));
}

onMount(() => {
  window.naver ? initMap() : createMapScript({
    clientId: mapOptions.clientId,
    category: mapOptions.category,
  }, initMap);
})

onDestroy(() => {
  get(mapInstance).destroy();
})
</script>

<div 
  bind:this={mapElement}
  style:width={mapOptions.width} 
  style:height={mapOptions.height}
  {...$$restProps}>
  <slot />
</div>
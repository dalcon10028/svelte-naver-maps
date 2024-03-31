<script lang="ts">
import { createEventDispatcher, onDestroy, onMount } from "svelte";
import { mapCallbacks, mapInstance, mapIsLoaded } from "../stores/index.js";
import { createMapScript } from "../utils/index.js"
import { UI_MAP_EVENT } from "$lib/constants/event.js";
import { get } from "svelte/store";
import type { MapOptions } from "../types/index.js";

export let mapOptions: MapOptions;

const dispatcher = createEventDispatcher();

let mapElement: HTMLDivElement;

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
  mapIsLoaded.set(true);
  get(mapCallbacks).forEach((callback) => callback(get(mapInstance)));
  mapCallbacks.set([]);

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
  mapIsLoaded.set(false);
})
</script>

<div 
  bind:this={mapElement}
  style:width={mapOptions.width} 
  style:height={mapOptions.height}
  {...$$restProps}>
  <slot />
</div>
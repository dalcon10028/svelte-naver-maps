<script lang="ts">
import { createEventDispatcher, onDestroy, onMount, setContext } from "svelte";
import { createMapScript } from "../utils/index.js"
import { get, writable } from "svelte/store";
import { MOUSE_EVENT, DRAG_EVENT, TOUCH_EVENT } from "$lib/constants";
import type { MapContext, MapOptions } from "../types/index.js";

export let mapOptions: MapOptions;

const MAP_EVENT = [
  ...MOUSE_EVENT, 
  ...DRAG_EVENT, 
  ...TOUCH_EVENT,
  "addLayer",
  "bounds_changed",
  "center_changed",
  "centerPoint_changed",
  "idle",
  "init_stylemap",
  "keydown",
  "keyup",
  "mapType_changed",
  "mapTypeId_changed",
  "panning",
  "projection_changed",
  "removeLayer",
  "resize",
  "size_changed",
  "tilesloaded",
  "zoom_changed",
  "zooming",
] as const;

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
  
  MAP_EVENT.forEach((eventName) => {
    get(mapInstance).addListener(eventName, (event) => {
      dispatcher(eventName, event);
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
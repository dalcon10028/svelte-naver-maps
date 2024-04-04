<script lang="ts">
import { createEventDispatcher, getContext, onDestroy, setContext } from "svelte";
import type { MapContext, MarkerContext, MarkerOptions } from "$lib/types";
import { UI_MARKER_EVENT } from "$lib/constants";
import { get, writable } from "svelte/store";

export let latitude: number;
export let longitude: number;
export let markerOptions: MarkerOptions | undefined = {};

const { mapInstance } = getContext<MapContext>("map");

const dispatcher = createEventDispatcher();

let markerInstance = writable<naver.maps.Marker>();
let marketElement: HTMLDivElement;

setContext<MarkerContext>("marker", {
  markerInstance,
  position: {
    latitude,
    longitude,
  },
});

const initMarker = (map: naver.maps.Map) => {
  markerInstance.set(new naver.maps.Marker({
    map,
    ...markerOptions,
    position: new naver.maps.LatLng(latitude, longitude),
  }));
  UI_MARKER_EVENT.forEach((eventName) => {
    get(markerInstance)?.addListener(eventName, (e) => {
      dispatcher(eventName, e);
    });
  });

  dispatcher("load", get(markerInstance));
}

mapInstance.subscribe((map) => {
  if (map) {
    initMarker(map);
  }
});

// onMount(() => useLoadMap(initMarker));
onDestroy(() => { 
  get(markerInstance)?.setMap(null);
});

</script>

<div bind:this={marketElement} {...$$restProps}>
  <slot />
</div>
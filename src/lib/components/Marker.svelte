<script lang="ts">
import { createEventDispatcher, getContext, hasContext, onDestroy, setContext } from "svelte";
import type { MapContext, MarkerClusterContext, MarkerContext, MarkerOptions } from "$lib/types";
import { MOUSE_EVENT, DRAG_EVENT, TOUCH_EVENT } from "$lib/constants";
import { get, writable } from "svelte/store";

export let latitude: number;
export let longitude: number;
export let markerOptions: MarkerOptions = {};

const MARKER_EVENT = [...MOUSE_EVENT, ...DRAG_EVENT, ...TOUCH_EVENT] as const;

const { mapInstance } = getContext<MapContext>("map");

const dispatcher = createEventDispatcher();

let markerInstance = writable<naver.maps.Marker>();
let marketElement: HTMLDivElement;

const { markers } = getContext<MarkerClusterContext>("markerCluster");

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
  MARKER_EVENT.forEach((eventName) => {
    get(markerInstance).addListener(eventName, (e) => {
      dispatcher(eventName, e);
    });
  });

  dispatcher("load", get(markerInstance));

  markers.push(get(markerInstance));
}

mapInstance.subscribe((map) => {
  if (map) {
    initMarker(map);
  }
});

onDestroy(() => { 
  get(markerInstance)?.setMap(null);
});

</script>

<div bind:this={marketElement} {...$$restProps}>
  <slot />
</div>
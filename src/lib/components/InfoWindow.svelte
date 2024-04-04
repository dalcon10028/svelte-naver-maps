<script lang="ts">
import type { MapContext, MarkerContext } from "$lib/types";
import { createEventDispatcher, getContext, onDestroy } from "svelte";
import { get } from "svelte/store";

export let open: boolean = true;
export let infoWindowOptions: Omit<naver.maps.InfoWindowOptions, "content" | "position"> = {};

const { mapInstance } = getContext<MapContext>("map");
const { markerInstance, position: { latitude, longitude } } = getContext<MarkerContext>("marker");

const dispatcher = createEventDispatcher();

let infoWindow: naver.maps.InfoWindow | undefined;
let infoWindowElement: HTMLDivElement;

const useOpenInfoWindow = () => {
  console.log('useOpenInfoWindow')
  if (!get(markerInstance)) console.error("Marker is not loaded yet");
  if (!infoWindow) console.error("InfoWindow is not loaded yet");
  if (!latitude || !longitude) console.error("Marker is not loaded yet");

  if (open) {
    infoWindow?.open(get(mapInstance), get(markerInstance));
  } else {
    infoWindow?.close();
  }

};

const initInfoWindow = () => {
  console.log('initInfoWindow')
  infoWindow = new naver.maps.InfoWindow({
    ...infoWindowOptions,
    content: infoWindowElement,
    position: new naver.maps.LatLng(latitude, longitude),
  });

  useOpenInfoWindow();
  dispatcher("load", infoWindow);
};

markerInstance.subscribe((marker) => {
  if (marker) {
    initInfoWindow();
    marker.addListener("click", () => {
      open = !open;
      useOpenInfoWindow();
    });
  }
});

onDestroy(() => {
  infoWindow?.close();
  infoWindow = undefined;
});

</script>

<div bind:this={infoWindowElement} {...$$restProps}>
  <slot />
</div>
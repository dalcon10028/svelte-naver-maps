<script lang="ts">
import type { InfoWindowOptions, MapContext, MarkerContext } from "$lib/types";
import { createEventDispatcher, getContext, onDestroy } from "svelte";
import { get } from "svelte/store";

export let open: boolean = false;
export let infoWindowOptions: InfoWindowOptions = {};

const INFO_WINDOW_EVENTS = [
  "anchorColor_changed",
  "anchorSize_changed",
  "anchorSkew_changed",
  "backgroundColor_changed",
  "borderColor_changed",
  "borderWidth_changed",
  "close",
  "content_changed",
  "disableAnchor_changed",
  "disableAutoPan_changed",
  "maxWidth_changed",
  "open",
  "pixelOffset_changed",
  "position_changed",
  "zIndex_changed",
] as const;

const { mapInstance } = getContext<MapContext>("map");
const { markerInstance, position: { latitude, longitude } } = getContext<MarkerContext>("marker");

const dispatcher = createEventDispatcher();

let infoWindow: naver.maps.InfoWindow;
let infoWindowElement: HTMLDivElement;

const useOpenInfoWindow = () => {
  if (!get(markerInstance)) throw new Error("Marker is not loaded yet");
  if (!infoWindow) throw new Error("InfoWindow is not loaded yet");
  if (!latitude || !longitude) throw new Error("Latitude or Longitude is not provided");

  if (open) {
    infoWindow.open(get(mapInstance), get(markerInstance));
  } else {
    infoWindow.close();
  }

};

const initInfoWindow = () => {
  infoWindow = new naver.maps.InfoWindow({
    ...infoWindowOptions,
    content: infoWindowElement,
    position: new naver.maps.LatLng(latitude, longitude),
  });

  useOpenInfoWindow();

  INFO_WINDOW_EVENTS.forEach((eventName) => {
    infoWindow.addListener(eventName, (event) => {
      dispatcher(eventName, event);
    });
  });

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
  infoWindow.close();
  infoWindow.setMap(null);
});

</script>

<div bind:this={infoWindowElement} {...$$restProps}>
  <slot />
</div>
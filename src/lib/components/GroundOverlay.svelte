<script lang="ts">
import type { Bounds, GroundOverlayOptions, MapContext } from "$lib/types";
import { createEventDispatcher, getContext, onDestroy } from "svelte";
import { get } from "svelte/store";

export let url: string;
export let bounds: Bounds;
export let groundOverlayOptions: GroundOverlayOptions = {};

const GROUND_OVERLAY_EVENTS = [
  "click",
  "dblclick",
] as const;
const dispatcher = createEventDispatcher();

const { mapInstance } = getContext<MapContext>("map");

let groundOverlayInstance: naver.maps.GroundOverlay;

const initGroundOverlay = () => {
  groundOverlayInstance = new naver.maps.GroundOverlay(
    url,
    new naver.maps.LatLngBounds(
      new naver.maps.LatLng(bounds.minPoint.latitude, bounds.minPoint.longitude),
      new naver.maps.LatLng(bounds.maxPoint.latitude, bounds.maxPoint.longitude),
    ), {
    ...groundOverlayOptions,
    map: get(mapInstance),
  });

  GROUND_OVERLAY_EVENTS.forEach((eventName) => {
    groundOverlayInstance.addListener(eventName, (event) => dispatcher(eventName, event));
  });
  dispatcher("load", groundOverlayInstance);
};

mapInstance.subscribe((map) => map && initGroundOverlay());

onDestroy(() => groundOverlayInstance.setMap(null));
</script>
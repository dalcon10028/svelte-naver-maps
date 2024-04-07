<script lang="ts">
import type { MapContext, CircleOptions } from "$lib/types";
import { createEventDispatcher, getContext, onDestroy } from "svelte";
import { get } from "svelte/store";

export let latitude: number;
export let longitude: number;
export let circleOptions: CircleOptions = {};

const CIRCLE_EVENTS = [
  "center_changed",
  "click",
  "clickable_changed",
  "dblclick",
  "mousedown",
  "mouseout",
  "mouseover",
  "mouseup",
  "radius_changed",
  "visible_changed",
  "zIndex_changed",
] as const;

const dispatcher = createEventDispatcher();
const { mapInstance } = getContext<MapContext>("map");

let circleInstance: naver.maps.Circle;

const initCircle = () => {
  circleInstance = new naver.maps.Circle({
    ...circleOptions,
    map: get(mapInstance),
    center: new naver.maps.LatLng(latitude, longitude),
  });

  CIRCLE_EVENTS.forEach((eventName) => {
    circleInstance.addListener(eventName, (event) => {
      dispatcher(eventName, event);
    });
  });

  dispatcher("load", circleInstance);
};

mapInstance.subscribe((map) => map && initCircle());

onDestroy(() => circleInstance && circleInstance.setMap(null));
</script>
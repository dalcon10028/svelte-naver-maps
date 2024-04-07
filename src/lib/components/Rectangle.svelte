<script lang="ts">
import type { MapContext, RectangleOptions } from "$lib/types";
import { createEventDispatcher, getContext, onDestroy } from "svelte";
import { get } from "svelte/store";

export let minLatitude: number;
export let minLongitude: number;
export let maxLatitude: number;
export let maxLongitude: number;
export let rectangleOptions: RectangleOptions = {};

const RECTANGLE_EVENTS = [
  "bounds_changed",
  "click",
  "clickable_changed",
  "dblclick",
  "mousedown",
  "mouseout",
  "mouseover",
  "mouseup",
  "visible_changed",
  "zIndex_changed",
] as const;

const dispatcher = createEventDispatcher();
const { mapInstance } = getContext<MapContext>("map");

let rectangleInstance: naver.maps.Rectangle;

const initRectangle = () => {
  rectangleInstance = new naver.maps.Rectangle({
    ...rectangleOptions,
    map: get(mapInstance),
    bounds: new naver.maps.LatLngBounds(
      new naver.maps.LatLng(minLatitude, minLongitude),
      new naver.maps.LatLng(maxLatitude, maxLongitude)
    ),
  });

  RECTANGLE_EVENTS.forEach((eventName) => {
    rectangleInstance.addListener(eventName, (event) => {
      dispatcher(eventName, event);
    });
  });
  dispatcher("load", rectangleInstance);
};

mapInstance.subscribe((map) => map && initRectangle());

onDestroy(() => rectangleInstance && rectangleInstance.setMap(null));
</script>

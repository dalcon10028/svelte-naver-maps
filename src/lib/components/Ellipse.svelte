<script lang="ts">
import type { MapContext, EllipseOptions } from "$lib/types";
import { createEventDispatcher, getContext, onDestroy } from "svelte";
import { get } from "svelte/store";

export let minLatitude: number;
export let minLongitude: number;
export let maxLatitude: number;
export let maxLongitude: number;
export let ellipseOptions: EllipseOptions = {};

const ELLIPSE_EVENTS = [
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

let ellipseInstance: naver.maps.Ellipse;

const initEllipse = () => {
  ellipseInstance = new naver.maps.Ellipse({
    ...ellipseOptions,
    map: get(mapInstance),
    bounds: new naver.maps.LatLngBounds(
      new naver.maps.LatLng(minLatitude, minLongitude),
      new naver.maps.LatLng(maxLatitude, maxLongitude)
    ),
  });

  ELLIPSE_EVENTS.forEach((eventName) => {
    ellipseInstance.addListener(eventName, (event) => {
      dispatcher(eventName, event);
    });
  });

  dispatcher("load", ellipseInstance);
};

mapInstance.subscribe((map) => map && initEllipse());

onDestroy(() => ellipseInstance && ellipseInstance.setMap(null));
</script>
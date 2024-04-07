<script lang="ts">
import type { MapContext, Point, PolylineOptions } from "$lib/types";
import { createEventDispatcher, getContext, onDestroy } from "svelte";
import { get } from "svelte/store";

export let path: Array<Point> = [];
export let polylineOptions: PolylineOptions = {};

const POLYLINE_EVENTS = [
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

let polylineInstance: naver.maps.Polyline;

const initPolyline = () => {
  polylineInstance = new naver.maps.Polyline({
    ...polylineOptions,
    path: path.map(({ latitude, longitude }) => new naver.maps.LatLng(latitude, longitude)),
    map: get(mapInstance),
  });

  POLYLINE_EVENTS.forEach((eventName) => {
    polylineInstance.addListener(eventName, (event) => {
      dispatcher(eventName, event);
    });
  });
  dispatcher("load", polylineInstance);
};

mapInstance.subscribe((map) => map && initPolyline());

onDestroy(() => polylineInstance && polylineInstance.setMap(null));
</script>
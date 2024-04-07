<script lang="ts">
import type { MapContext, Point, PolygonOptions } from "$lib/types";
import { createEventDispatcher, getContext, onDestroy } from "svelte";
import { get } from "svelte/store";

export let paths: Array<Array<Point>> = [];
export let polygonOptions: PolygonOptions = {};

const POLYGON_EVENTS = [
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

let polygonInstance: naver.maps.Polygon;

const initPolygon = () => {
  polygonInstance = new naver.maps.Polygon({
    ...polygonOptions,
    paths: paths.map((path) => path.map(({ latitude, longitude }) => new naver.maps.LatLng(latitude, longitude))),
    map: get(mapInstance),
  });

  POLYGON_EVENTS.forEach((eventName) => {
    polygonInstance.addListener(eventName, (event) => {
      dispatcher(eventName, event);
    });
  });
  dispatcher("load", polygonInstance);
};

mapInstance.subscribe((map) => map && initPolygon());

onDestroy(() => polygonInstance && polygonInstance.setMap(null));
</script>
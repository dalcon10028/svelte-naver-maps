<script lang="ts">
import type { MapContext, RectangleOptions } from "$lib/types";
import { getContext } from "svelte";
import { get } from "svelte/store";

export let minLatitude: number;
export let minLongitude: number;
export let maxLatitude: number;
export let maxLongitude: number;
export let rectangleOptions: RectangleOptions = {};

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
};

mapInstance.subscribe((map) => map && initRectangle());
</script>

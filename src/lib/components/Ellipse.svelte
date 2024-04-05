<script lang="ts">
import type { MapContext, EllipseOptions } from "$lib/types";
import { getContext } from "svelte";
import { get } from "svelte/store";

export let minLatitude: number;
export let minLongitude: number;
export let maxLatitude: number;
export let maxLongitude: number;
export let ellipseOptions: EllipseOptions = {};

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
};

mapInstance.subscribe((map) => map && initEllipse());
</script>
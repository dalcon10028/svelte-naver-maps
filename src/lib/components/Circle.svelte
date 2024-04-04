<script lang="ts">
import type { MapContext, CircleOptions } from "$lib/types";
import { getContext } from "svelte";
import { get } from "svelte/store";

export let latitude: number;
export let longitude: number;
export let circleOptions: CircleOptions = {};

const { mapInstance } = getContext<MapContext>("map");

let circleInstance: naver.maps.Circle;

const initCircle = () => {
  circleInstance = new naver.maps.Circle({
    ...circleOptions,
    map: get(mapInstance),
    center: new naver.maps.LatLng(latitude, longitude),
  });
};

mapInstance.subscribe((map) => map && initCircle());
</script>
<script lang="ts">
import { useLoadMap } from "$lib/hooks/useLoadMap";
import { createEventDispatcher, onDestroy, onMount } from "svelte";
import type { MarkerOptions } from "$lib/types";
import { UI_MARKER_EVENT } from "$lib/constants";

export let latitude: number;
export let longitude: number;
export let markerOptions: MarkerOptions | undefined;

const dispatcher = createEventDispatcher();

let marker: naver.maps.Marker;
let marketElement: HTMLDivElement;

const initMarker = (map: naver.maps.Map) => {
  marker = new naver.maps.Marker({
    map,
    ...markerOptions,
    position: new naver.maps.LatLng(latitude, longitude),
  });
  UI_MARKER_EVENT.forEach((eventName) => {
    marker?.addListener(eventName, (e) => {
      dispatcher(eventName, e);
    });
  });

  dispatcher("load", marker);
}

onMount(() => useLoadMap(initMarker));
onDestroy(() => { 
  marker?.setMap(null);
});

</script>

<div bind:this={marketElement} {...$$restProps}>
  <slot />
</div>
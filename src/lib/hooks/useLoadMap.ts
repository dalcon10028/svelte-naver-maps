import { mapCallbacks, mapInstance, mapIsLoaded } from "$lib/stores";
import { get } from "svelte/store";

export function useLoadMap(callback: (map: naver.maps.Map) => void) {
  if (get(mapIsLoaded)) callback(get(mapInstance));
  else mapCallbacks.update((callbacks) => [...callbacks, callback]);
}
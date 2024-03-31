import type { MapInitCallback } from "$lib/types/index.js";
import { writable } from "svelte/store";

export const mapInstance = writable<naver.maps.Map>();
export const mapIsLoaded = writable<boolean>(false);
export const mapCallbacks = writable<MapInitCallback[]>([]);
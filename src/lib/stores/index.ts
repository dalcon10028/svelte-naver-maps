import { writable } from "svelte/store";
import type { MapInitCallback } from "../types/index.ts";

export const mapInstance = writable<naver.maps.Map>();
export const mapIsLoaded = writable<boolean>(false);
export const mapCallbacks = writable<MapInitCallback[]>([]);
import { writable } from "svelte/store";

export const scriptCallbacks = writable<Array<() => void>>([]);
export const onScriptLoad = writable(false);

onScriptLoad.subscribe((value) => {
  if (value) {
    scriptCallbacks.update((callbacks) => {
      callbacks.forEach((callback) => callback());
      return [];
    });
  }
});
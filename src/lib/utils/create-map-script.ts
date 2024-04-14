import { onScriptLoad } from "$lib/stores";
import type { ScriptOptions } from "$lib/types/index.js";

export function createMapScript(options: ScriptOptions) {
  const BASE_URL = "https://openapi.map.naver.com/openapi/v3/maps.js";
  const naverMapScript = document.createElement('script');

  naverMapScript.src = `${BASE_URL}?${options.category ?? 'ncp'}ClientId=${options.clientId}`;
  naverMapScript.async = true;
  naverMapScript.defer = true;

  naverMapScript.onerror = () => new Error('Failed to load Naver Map API');
  naverMapScript.onload = () => onScriptLoad.set(true);

  document.head.appendChild(naverMapScript);
}
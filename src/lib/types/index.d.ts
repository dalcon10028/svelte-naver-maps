export interface ScriptOptions {
  clientId: string;
  category?: "gov" | "ncp" | "fin";
}

export interface MapOptions extends naver.maps.MapOptions, ScriptOptions {
  latitude?: number;
  longitude?: number;
  width?: string | number;
  height?: string | number;
}

export interface MarkerOptions extends Omit<naver.maps.MarkerOptions, "position"> {};

export type MapInitCallback = (map: naver.maps.Map) => void;
import type { Writable } from "svelte/store";

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

export interface InfoWindowOptions extends Omit<naver.maps.InfoWindowOptions, "content" | "position"> {};

export interface CircleOptions extends Omit<naver.maps.CircleOptions, "center"> {};

export interface EllipseOptions extends Omit<naver.maps.EllipseOptions, "bounds"> {};

export interface RectangleOptions extends Omit<naver.maps.RectangleOptions, "bounds"> {};

export interface MapContext {
  mapInstance: Writable<naver.maps.Map>;
}

export interface MarkerContext {
  markerInstance: Writable<naver.maps.Marker>;
  position: { 
    latitude: number;
    longitude: number;
  }
}
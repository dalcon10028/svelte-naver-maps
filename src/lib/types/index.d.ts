import type { Writable } from "svelte/store";

export interface ScriptOptions {
  clientId: string;
  category?: "gov" | "ncp" | "fin";
}

export interface Point {
  latitude: number;
  longitude: number;
}

export interface MapOptions extends naver.maps.MapOptions, ScriptOptions {
  latitude?: number;
  longitude?: number;
  width?: string | number;
  height?: string | number;
}

export interface MarkerOptions extends Omit<naver.maps.MarkerOptions, "position" | "map"> {};

export interface InfoWindowOptions extends Omit<naver.maps.InfoWindowOptions, "content" | "position"> {};

export interface CircleOptions extends Omit<naver.maps.CircleOptions, "center" | "map"> {};

export interface EllipseOptions extends Omit<naver.maps.EllipseOptions, "bounds" | "map"> {};

export interface RectangleOptions extends Omit<naver.maps.RectangleOptions, "bounds" | "map"> {};

export interface PolygonOptions extends Omit<naver.maps.PolygonOptions, "paths" | "map"> {};

export interface PolylineOptions extends Omit<naver.maps.PolylineOptions, "path" | "map"> {};

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
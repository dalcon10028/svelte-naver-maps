export const UI_MOUSE_EVENT = [
  "mousedown",
  "mouseup",
  "click",
  "dblclick",
  "rightclick",
  "mouseover",
  "mouseout",
  "mousemove",
] as const;

export const UI_DRAG_EVENT = ["dragstart", "drag", "dragend"] as const;

export const UI_TOUCH_EVENT = ["touchstart", "touchmove", "touchend"] as const;

export const UI_MARKER_EVENT = [
  ...UI_MOUSE_EVENT,
  ...UI_DRAG_EVENT,
  ...UI_TOUCH_EVENT,
] as const;

export const UI_MAP_EVENT = [
  ...UI_MOUSE_EVENT,
  ...UI_DRAG_EVENT,
  ...UI_TOUCH_EVENT,
  "addLayer",
  "bounds_changed",
  "center_changed",
  "centerPoint_changed",
  "idle",
  "init_stylemap",
  "keydown",
  "keyup",
  "mapType_changed",
  "mapTypeId_changed",
  "panning",
  "projection_changed",
  "removeLayer",
  "resize",
  "size_changed",
  "tilesloaded",
  "zoom_changed",
  "zooming",
] as const;
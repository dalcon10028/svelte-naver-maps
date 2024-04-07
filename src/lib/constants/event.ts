export const MOUSE_EVENT = [
  "mousedown",
  "mouseup",
  "click",
  "dblclick",
  "rightclick",
  "mouseover",
  "mouseout",
  "mousemove",
] as const;

export const DRAG_EVENT = ["dragstart", "drag", "dragend"] as const;

export const TOUCH_EVENT = ["touchstart", "touchmove", "touchend"] as const;
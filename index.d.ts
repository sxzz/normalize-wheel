export interface NormalizedWheelEvent {
  spinX: number,
  spinY: number,
  pixelX: number,
  pixelY: number
}

declare module 'normalize-wheel-es' {
  function normalizeWheel(e: WheelEvent): NormalizedWheelEvent;
  export = normalizeWheel;
}

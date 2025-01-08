import Ilens from "./ilens";

export class Lens {
  [Ilens.zoomIn](level) {
    console.log(`ZoomIn in by ${level}`);
  }
  [Ilens.zoomOut](level) {
    console.log(`ZoomOut in by ${level}`);
  }
}

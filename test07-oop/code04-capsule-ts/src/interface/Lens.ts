import ILens from "./ILens";

export default class Lens implements ILens {
  zoomIn(level: number): void {
    console.log('줌인')
  }
  zoomOut(level: number): void {
    console.log('줌아웃');
  }
}
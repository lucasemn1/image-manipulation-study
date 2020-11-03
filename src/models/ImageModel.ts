
export default class ImageModel {
  public src: string;
  public opacity: number;

  constructor(src: string, opacity?: number) {
    this.src = src;
    this.opacity = opacity ?? 1;
  }

  getSize() {
    const img = new Image();
    img.src = this.src;

    return { width: img.width, height: img.height};
  }

  getHeight(width: number) {
    const img = new Image();
    img.src = this.src;

    return this.getSize().height * width / this.getSize().width;
  }

  getCenter() {
    const img = new Image();
    img.src = this.src;

    return { x: img.width / 2, y: img.height / 2 };
  }
}
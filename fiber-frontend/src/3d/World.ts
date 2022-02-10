import { Color, Group, Scene } from 'three';

export class World extends Scene {
  constructor() {
    super();
    this.addBackground();
  }

  addBackground(): void {
    this.background = new Color('#000000');
  }

  addObject3D(object3D: Group): void {
    this.add(object3D);
  }
}

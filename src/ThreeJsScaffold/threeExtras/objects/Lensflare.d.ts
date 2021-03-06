import {
  Mesh,
  Texture,
  Color
} from 'three';

export class LensflareElement {
  constructor(texture: Texture, size?: number, distance?: number, color?: Color );
  texture: Texture;
  size: number;
  distance: number;
  color: Color;
}

export class Lensflare extends Mesh {
  constructor();
  isLensflare: boolean;

  addElement(element: LensflareElement): void;
  dispose(): void;
}

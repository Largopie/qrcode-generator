import { Gradient } from 'qr-code-styling';
import { CSSProperties } from 'react';

export interface QRCodeShapeOptions<T> {
  color: CSSProperties['color'];
  type?: T;
  gradient?: Gradient;
}

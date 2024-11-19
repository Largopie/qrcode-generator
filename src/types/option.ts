import type { Gradient } from 'qr-code-styling';
import type { CSSProperties } from 'react';

export interface QRCodeShapeOptions<T> {
  color: CSSProperties['color'];
  type?: T;
  gradient?: Gradient;
}

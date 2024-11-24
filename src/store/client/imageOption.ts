import { atom } from 'jotai';
import { stringToNumber } from '../../utils/stringToNumber';

export const hideBackgroundAtom = atom(false);
export const imageSizeAtom = atom('0.4');
export const imageMarginAtom = atom('0');

export const imageOptionAtom = atom((get) => {
  const hideBackgroundDots = get(hideBackgroundAtom);
  const imageSize = stringToNumber(get(imageSizeAtom));
  const margin = stringToNumber(get(imageMarginAtom));

  return { hideBackgroundDots, imageSize, margin };
});

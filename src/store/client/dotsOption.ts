import { atom } from 'jotai';

export type DotsType = 'classy' | 'classy-rounded' | 'dots' | 'extra-rounded' | 'rounded' | 'square';

export const dotsTypeAtom = atom<DotsType>('square');
export const dotsColorAtom = atom('#000000');

export const dotsOptionAtom = atom((get) => {
  const type = get(dotsTypeAtom);
  const color = get(dotsColorAtom);

  return { type, color };
});

import { atom } from 'jotai';

export type CornerSquaresType = 'square' | 'dot' | 'extra-rounded';
export type CornerDotsType = 'square' | 'dot';

export const cornerSquaresTypeAtom = atom<CornerSquaresType>('square');
export const cornerSquaresColorAtom = atom('#000000');

export const cornerSquaresOptionAtom = atom((get) => {
  const type = get(cornerSquaresTypeAtom);
  const color = get(cornerSquaresColorAtom);

  return { type, color };
});

export const cornerDotsTypeAtom = atom<CornerDotsType>('square');
export const cornerDotsColorAtom = atom('#000000');

export const cornersDotOptionAtom = atom((get) => {
  const type = get(cornerDotsTypeAtom);
  const color = get(cornerDotsColorAtom);

  return { type, color };
});

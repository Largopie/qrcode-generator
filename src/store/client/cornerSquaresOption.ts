import { atom } from 'jotai';

export type CornerSquaresType = 'square' | 'dot' | 'extra-rounded';

export const cornerSquaresTypeAtom = atom<CornerSquaresType>('square');
export const cornerSquaresColorAtom = atom('#000000');

export const cornerSquaresOptionAtom = atom((get) => {
  const type = get(cornerSquaresTypeAtom);
  const color = get(cornerSquaresColorAtom);

  return { type, color };
});

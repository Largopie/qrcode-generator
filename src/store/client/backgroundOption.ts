import { atom } from 'jotai';

export const backgroundColorAtom = atom('#FFFFFF');

export const backgroundOptionAtom = atom((get) => {
  const color = get(backgroundColorAtom);

  return { color };
});

import { atom } from 'jotai';
import { stringToNumber } from '../../utils/stringToNumber';

export const dataAtom = atom('https://momonow.kr');
export const widthAtom = atom('300');
export const heightAtom = atom('300');
export const marginAtom = atom('10');
export const imageAtom = atom<Blob | null>(null);

export const imageURLAtom = atom((get) => {
  const image = get(imageAtom);

  return image ? URL.createObjectURL(image) : '';
});

export const mainOptionAtom = atom((get) => {
  const data = get(dataAtom);
  const width = stringToNumber(get(widthAtom));
  const height = stringToNumber(get(heightAtom));
  const margin = stringToNumber(get(marginAtom));
  const imageURL = get(imageURLAtom);

  return { data, width, height, margin, image: imageURL };
});

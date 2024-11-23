import { useAtom } from 'jotai';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { imageAtom } from '../../store/client/mainOption';

const useImage = () => {
  const [value, setValue] = useState('');
  const [image, setImage] = useAtom(imageAtom);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      setValue(event.target.value);
      setImage(files[0]);
    }
  };

  const removeImage = () => {
    setImage(null);
    setValue('');
  };

  return { image, value, handleImageChange, removeImage };
};

export default useImage;

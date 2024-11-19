import type { ChangeEvent } from 'react';
import { useState } from 'react';

const useImage = () => {
  const [value, setValue] = useState('');
  const [image, setImage] = useState<Blob | null>(null);
  const imageURL = image ? URL.createObjectURL(image) : '';

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      setValue(event.target.value);
      setImage(files[0]);
    }
  };

  return { imageURL, value, handleImageChange };
};

export default useImage;

import type { FileExtension } from 'qr-code-styling';
import type QRCodeStyling from 'qr-code-styling';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

const useDownload = (qrCode: QRCodeStyling) => {
  const [fileExt, setFileExt] = useState<FileExtension>('png');

  const onExtensionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFileExt(event.target.value as FileExtension);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt,
    });
  };

  return { onDownloadClick, onExtensionChange, fileExt };
};

export default useDownload;

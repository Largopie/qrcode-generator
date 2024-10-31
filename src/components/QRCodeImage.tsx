import QRCodeStyling, { FileExtension } from 'qr-code-styling';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

interface QRCodeImageProps {
  qrCode: QRCodeStyling;
}

export default function QRCodeImage({ qrCode }: QRCodeImageProps) {
  const [fileExt, setFileExt] = useState<FileExtension>('png');
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    qrCode.append(ref.current ? ref.current : undefined);
  }, [qrCode]);

  const onExtensionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFileExt(event.target.value as FileExtension);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt,
    });
  };

  return (
    <div>
      <div style={styles.inputWrapper}>
        <select onChange={onExtensionChange} value={fileExt}>
          <option value='png'>PNG</option>
          <option value='jpeg'>JPEG</option>
          <option value='webp'>WEBP</option>
        </select>
        <button onClick={onDownloadClick}>Download</button>
      </div>
      <div ref={ref} />
    </div>
  );
}

const styles = {
  inputWrapper: {
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 20,
  },
};

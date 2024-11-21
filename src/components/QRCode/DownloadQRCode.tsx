import type QRCodeStyling from 'qr-code-styling';
import PreviewQRCode from './PreviewQRCode';
import useDownload from '../../hooks/qrcode/useDownload';

interface DownloadQRCodeProps {
  qrCode: QRCodeStyling;
}

const DownloadQRCode = ({ qrCode }: DownloadQRCodeProps) => {
  const { fileExt, onDownloadClick, onExtensionChange } = useDownload(qrCode);

  return (
    <div>
      <PreviewQRCode qrCode={qrCode} />
      <div>
        <select onChange={onExtensionChange} value={fileExt}>
          <option value='png'>PNG</option>
          <option value='jpeg'>JPEG</option>
          <option value='webp'>WEBP</option>
        </select>
        <button onClick={onDownloadClick}>Download</button>
      </div>
    </div>
  );
};

export default DownloadQRCode;

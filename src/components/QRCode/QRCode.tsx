// import React, { useEffect } from 'react'

// const QRCode = () => {

//   const qrCode = useMemo(() => {
//     return new QRCodeStyling({
//       ...mainDataForQRCode,
//       type: 'canvas',
//       dotsOptions: dots,
//       cornersSquareOptions: cornersSquare,
//       cornersDotOptions: cornersDot,
//       backgroundOptions: background,
//       imageOptions: {
//         ...imageForQRCode,
//         crossOrigin: 'anonymous',
//       },
//     });
//   }, [mainDataForQRCode, cornersDot, cornersSquare, dots, background, imageForQRCode]);

//   useEffect(() => {
//     qrCode.update({
//       ...mainDataForQRCode,
//     });
//   }, [qrCode, mainDataForQRCode]);
// }

// export default QRCode

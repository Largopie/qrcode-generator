# QRCode Generator

간편하게 만들어보는 QRCode 생성기

서비스 링크 : https://largopie.github.io/qrcode-generator

## 문제 인식

2024년 프로젝트 데모데이를 진행하면서 명함을 만들었다.

"qrcode generator"를 구글에 검색하면 가장 상단에 QR코드를 꾸며서 사진으로 변환할 수 있는 사이트가 나온다.

프레임 기능과 색상을 변경하는 기능을 제공해 QR코드를 이쁘게 만들어준다. 하지만 특정 사이트는 몇일간 무료로 사용하게 해주고 설정한 링크 대신 구독권을 요구하는 페이지로 redirect된다.

하지만 정말 불행하게도 우리 모모팀은 명함 제작을 의뢰했고 거기에 QR코드 링크를 해당 사이트로 생성했다. 명함이 도착하고 QR코드를 확인해 봤을때는 이미 우리 **모모 URL이 아닌 매월 결제하고 QR코드를 사용하라는 안내 메시지가 있는 페이지로 이동**하였다.

따라서 신뢰할 수 있는 QR코드 생성기 서비스가 있었으면 좋겠다는 생각이 들었고, 내가 만들어볼 수 있을 것 같았다.

더욱 자세한 내용을 파악하고 싶다면? => [노션 링크](https://grey-cymbal-d1f.notion.site/QR-00cb518052674bbf9e207856ef74b92d?pvs=4)

## 타겟 사용자

- QR코드를 간편하고 이쁘게 만들고 싶은 누구나
- 신뢰할 수 있는 QR코드 서비스를 사용하고 싶은 사람

## 사용 기술

- React
- Vite
- Typescript

### 핵심 라이브러리

- [qr-code-styling](https://www.npmjs.com/package/qr-code-styling)

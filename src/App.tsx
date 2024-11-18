import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme';
import GlobalStyle from './GlobalStyle';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

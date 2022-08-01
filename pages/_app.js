import { UserProvider } from "@auth0/nextjs-auth0";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/main.css';

function EverydaySurf({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default EverydaySurf;

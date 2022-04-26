
import NavBar from "../components/NavBar";

import "../styles/globals.css";

console.log('[App] render');
function App({ Component, pageProps }) {
  return (
    
    <>
    <Head>
      <link rel="icon" href="/icons/favicon.ico"/>
    </Head>
      <header>
        <NavBar />
      </header>

    <Component {...pageProps} />
    </>
    );
}

export default App;

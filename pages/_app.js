import StoreProvider from "../provider";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
    );
}

export default MyApp;

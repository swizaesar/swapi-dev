import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="/logo.png" />
            </Head>
            <title>Swapi Dev</title>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

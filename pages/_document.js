import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="/logo.png" />
                <script
                    src="https://kit.fontawesome.com/1be1e42c40.js"
                    crossorigin="anonymous"
                ></script>
            </Head>
            <title>Swapi Dev</title>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

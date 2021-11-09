import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNProgress height={2} color="#d3d3d3" />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

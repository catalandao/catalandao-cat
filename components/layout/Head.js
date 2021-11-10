import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

const Component = ({ title, description, keywords, image, article }) => {
    const { t } = useTranslation();

    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{title || t("common:1")}</title>

            {/** Metas */}
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={description || t("common:2")} />
            <meta name="keywords" content={keywords || t("common:3")} />

            <meta name="og:title" content={title || t("common:1")} />
            <meta name="twitter:title" content={title || t("common:1")} />
            <meta name="og:description" content={description | t("common:2")} />
            <meta name="twitter:description" content={description | t("common:2")} />

            {/** Image data */}
            {image && (
                <>
                    <meta property="og:image" content={image} />
                    <meta name="twitter:image" content={image} />
                    <meta name="image" content={image} />
                </>
            )}

            {/** Article data */}
            {article && (
                <>
                    <meta property="og:type" content="article" />
                    <meta name="twitter:card" content="summary_large_image" />
                </>
            )}

            {/** Icons */}
            <link rel="apple-touch-icon" sizes="57x57" href="/images/icons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/images/icons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/images/icons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/images/icons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />

            {/** Colors */}
            <meta name="msapplication-TileColor" content="#2f506c" />
            <meta name="msapplication-TileImage" content="/images/icons/ms-icon-144x144.png" />
            <meta name="theme-color" content="#2f506c" />

            <meta name="author" content={"CatalanDAO"} />
            <meta name="copyright" content={`(c) ${new Date().getFullYear()} - ${t("common:")}`} />
        </Head>
    );
};
export default Component;
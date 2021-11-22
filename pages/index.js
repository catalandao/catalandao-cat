import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";

const Component = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t("index:1")}>
            <h1>{t("index:1")}</h1>
        </Layout>
    );
};

export default Component;

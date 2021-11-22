import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";

const Component = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t("contacte:1")}>
            <h1>Contacte</h1>
        </Layout>
    );
};

export default Component;

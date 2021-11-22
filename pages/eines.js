import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";

const Component = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t("eines:1")}>
            <h1>Eines</h1>
        </Layout>
    );
};

export default Component;

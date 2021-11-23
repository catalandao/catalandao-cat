import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";

const Component = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t("manifest:1")} className="manifest-page">
            <section className="content-wrapper py-10">
                <h1>{t("manifest:1")}</h1>
            </section>
        </Layout>
    );
};

export default Component;

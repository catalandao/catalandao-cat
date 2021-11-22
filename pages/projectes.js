import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";

const Component = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t("projectes:1")}>
            <section className="content-wrapper py-10">
                <h1>{t("projectes:1")}</h1>
            </section>
        </Layout>
    );
};

export default Component;

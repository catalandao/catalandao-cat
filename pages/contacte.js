import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";

const Component = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t("contacte:1")}>
            <section className="content-wrapper py-10">
                <h1>{t("contacte:1")}</h1>
            </section>
        </Layout>
    );
};

export default Component;

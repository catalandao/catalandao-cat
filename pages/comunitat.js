import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";

const Component = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t("comunitat:1")} className="comunitat-page">
          <section className="content-wrapper py-10">
            <h1>{t("comunitat:1")}</h1>
          </section>
        </Layout>
    );
};

export default Component;

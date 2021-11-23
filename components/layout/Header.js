import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/dist/client/router";
import HomeBanner from "./HomeBanner";
import Navigation from "./Navigation";

const Component = () => {
    const { t } = useTranslation();
    const { asPath } = useRouter();

    const isHome = asPath === '/';

    return (
        <>
            {isHome && <HomeBanner />}
            <header>
                <Navigation />
            </header>
        </>
    );
};

export default Component;

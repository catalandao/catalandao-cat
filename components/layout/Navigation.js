import { CatDAOLogo } from "@/styles/svgs/logos";
import useTranslation from "next-translate/useTranslation";
import Link from "./Link";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import i18nConfig from "../../i18n.json";
import setLanguage from "next-translate/setLanguage";

const Navigation = () => {
    const { t } = useTranslation();
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <>
            <div className="content-wrapper py-5 w-full">
                <Link className="logo" href="/">
                    <CatDAOLogo />
                </Link>

                {/** Menú navegació */}
                <nav className="hidden sm:flex items-center justify-between w-full">
                    <ul className="flex items-center space-x-5">
                        {/* activeClass={selectedNavItemClass} className={navItemClass} */}
                        <Link href="/manifest" activeClass="selected">{t("common:5")}</Link>
                        <Link href="/eines" activeClass="selected">{t("common:6")}</Link>
                        <Link href="/comunitat" activeClass="selected">{t("common:7")}</Link>
                        <Link href="/projectes" activeClass="selected">{t("common:8")}</Link>
                        <Link href="/contacte" activeClass="selected">{t("common:9")}</Link>
                    </ul>

                    <LangSelector />
                </nav>
                {/** Només x mobile */}
                <div className="lg:hidden fixed top-0">
                    <nav className={mobileMenuIsOpen ? "translate-x-0" : ""}>
                        <Link activeClass="selected" href="/">{t("common:10")}</Link>
                        <Link activeClass="selected" href="/manifest" className="merda">{t("common:5")}</Link>
                        <Link activeClass="selected" href="/eines">{t("common:6")}</Link>
                        <Link activeClass="selected" href="/comunitat">{t("common:7")}</Link>
                        <Link activeClass="selected" href="/projectes">{t("common:8")}</Link>
                        <Link activeClass="selected" href="/contacte">{t("common:9")}</Link>
                    </nav>
                    <Hamburger
                        direction="right"
                        role="button"
                        aria-label=""
                        label=""
                        easing="ease-in"
                        toggled={mobileMenuIsOpen}
                        toggle={setMobileMenuIsOpen}
                        hideOutline={true}
                        color={"#d3d3d3"}
                    />
                </div>
            </div>
        </>
    );
};

const LangSelector = () => {
    const { lang } = useTranslation();
    return (
        <ul className="flex items-center space-x-2">
            {i18nConfig?.locales?.filter(locale => locale !== lang).map(locale => {
                return (
                    <li key={locale}>
                        <button
                            title={locale}
                            onClick={async () => {
                                await setLanguage(locale);
                                const date = new Date();
                                const expireMs = 1 * 24 * 60 * 60 * 1000; // Expire in one day
                                date.setTime(date.getTime() + expireMs);
                                document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`;
                            }}
                            className={`border-b ${locale === lang ? "border-b" : "border-transparent"}`}
                        >
                            {locale}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Navigation;

import { CatDAOLogo } from "@/styles/svgs/logos";
import useTranslation from "next-translate/useTranslation";
import Link from "./Link";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import tw from "tailwind-styled-components";
import i18nConfig from "../../i18n.json";
import setLanguage from "next-translate/setLanguage";

const Container = tw.div`content-wrapper py-20`;

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
                        <Link href="/manifest">{t("common:5")}</Link>
                        <Link href="/eines">{t("common:6")}</Link>
                        <Link href="/comunitat">{t("common:7")}</Link>
                        <Link href="/projectes">{t("common:8")}</Link>
                        <Link href="/contacte">{t("common:9")}</Link>
                    </ul>

                    <LangSelector />
                </nav>

                {/** Només x mobile */}
                <div className="sm:hidden">
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

                {/** Mostra oculta mobile menú */}
                <Transition
                    show={mobileMenuIsOpen}
                    enter="transition-opacity duration-100"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className=""
                >
                    <div>Sóc un punto mobile menú!!!!</div>
                </Transition>
            </div>
        </>
    );
};

const LangSelector = () => {
    const { lang } = useTranslation();
    return (
        <ul className="flex items-center space-x-2">
            {i18nConfig?.locales?.map(locale => {
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

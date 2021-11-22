import useTranslation from "next-translate/useTranslation";
import Navigation from "./Navigation";
import tw from 'tailwind-styled-components';
import i18nConfig from "../../i18n.json";
import setLanguage from "next-translate/setLanguage";


const Component = () => {
    const { t } = useTranslation();

    return (
        <header>
            <Navigation />
            <LangSelector />
        </header>
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

export default Component;

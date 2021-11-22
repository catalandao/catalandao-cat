import useTranslation from "next-translate/useTranslation";
import Navigation from "./Navigation";


const Component = () => {
    const { t } = useTranslation();

    return <header>
        <Navigation />
        {/* language selector */}
    </header>;
};
export default Component;

import useTranslation from "next-translate/useTranslation";
import Navigation from "./Navigation";

const Component = () => {
    const { t } = useTranslation();

    return (
        <header>
            <Navigation />            
        </header>
    );
};

export default Component;
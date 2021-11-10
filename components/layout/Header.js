import tw from "tailwind-styled-components";
import useTranslation from "next-translate/useTranslation";

const Header = tw.header``;

const Component = () => {
    const { t } = useTranslation();

    return <Header></Header>;
};
export default Component;

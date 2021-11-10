import tw from "tailwind-styled-components";
import useTranslation from "next-translate/useTranslation";

const Footer = tw.footer``;

const Component = () => {
    const { t } = useTranslation();

    return <Footer></Footer>;
};
export default Component;

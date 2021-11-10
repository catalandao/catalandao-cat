import tw from 'tailwind-styled-components';
import useTranslation from "next-translate/useTranslation";

const Cookies = tw.div``;

const Component = () => {
    const { t } = useTranslation();

    return (
        <Cookies>

        </Cookies>
    );
};
export default Component;
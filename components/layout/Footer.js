import { LogoGithub } from "@/styles/svgs/logos";
import { LogoDiscord } from "@/styles/svgs/logos";
import { LogoEmail } from "@/styles/svgs/logos";
import { LogoTwitter } from "@/styles/svgs/logos";
import { LogoGitcoin } from "@/styles/svgs/logos";
import { CatDaoAdornment } from "@/styles/svgs/logos";
import useTranslation from "next-translate/useTranslation";
import tw from "tailwind-styled-components";

const Footer = tw.footer`bg-gray-300 py-20`;
const FooterContainer = tw.div`content-wrapper flex flex-col lg:flex-row w-full gap-10`;
const Note = tw.p`text-white text-sm p-2 lg:text-lg order-2 lg:order-1 lg:w-1/3 w-full`;
const Adornment = tw.span`order-3 lg:order-2 w-full lg:w-1/3 items-center`;
const SocialNav = tw.nav`order-1 lg:order-3 flex flex-row items-center lg:w-1/3 w-full space-x-5 justify-center lg:justify-end`;

const Component = () => {
    const { t } = useTranslation();

    return (
        <Footer>
            <FooterContainer>
                <Note>{t("common:4")}</Note>

                <Adornment>
                    <CatDaoAdornment className="w-full" />
                </Adornment>

                <SocialNav>
                    {/* Social, TODO: get social links */}
                    <a href="" target="_blank">
                        <LogoGithub className="w-10 h-10" />
                    </a>
                    <a href="" target="_blank">
                        <LogoGitcoin className="w-10 h-10" />
                    </a>
                    <a href="" target="_blank">
                        <LogoDiscord className="w-10 h-10" />
                    </a>
                    <a href="" target="_blank">
                        <LogoTwitter className="w-10 h-10" />
                    </a>
                    <a href="" target="_blank">
                        <LogoEmail className="w-10 h-10" />
                    </a>
                </SocialNav>
            </FooterContainer>
        </Footer>
    );
};

export default Component;

import { LogoGithub } from "@/styles/svgs/logos";
import { LogoDiscord } from "@/styles/svgs/logos";
import { LogoEmail } from "@/styles/svgs/logos";
import { LogoTwitter } from "@/styles/svgs/logos";
import { LogoGitcoin } from "@/styles/svgs/logos";
import { CatDaoAdornment } from "@/styles/svgs/logos";
import useTranslation from "next-translate/useTranslation";
import tw from 'tailwind-styled-components';

const Component = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <p className="note">{t("common:4")}</p>

            <span className="adornment">
                <CatDaoAdornment />
            </span>

            <nav className="social">
                {/* Social, TODO: get social links */}
                <a href="" target="_blank">
                    <LogoGithub />
                </a>
                <a href="" target="_blank">
                    <LogoGitcoin />
                </a>
                <a href="" target="_blank">
                    <LogoDiscord />
                </a>
                <a href="" target="_blank">
                    <LogoTwitter />
                </a>
                <a href="" target="_blank">
                    <LogoEmail />
                </a>
            </nav>
        </footer>
    );
};

export default Component;

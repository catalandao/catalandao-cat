import { LogoGithub } from "@/styles/svgs/logos";
import { LogoDiscord } from "@/styles/svgs/logos";
import { LogoEmail } from "@/styles/svgs/logos";
import { LogoTwitter } from "@/styles/svgs/logos";
import { LogoGitcoin } from "@/styles/svgs/logos";
import { CatDaoAdornment } from "@/styles/svgs/logos";
import useTranslation from "next-translate/useTranslation";

const Component = () => {
    const { t } = useTranslation();

    return <footer>
        <p className="note">CatalanDAO és una organització autònoma
    descentralitzada i coordinada a través
    de la blockchain amb l’objectiu de fomentar
    i promoure la cultura catalana.</p>

        <span className="adornment">
            <CatDaoAdornment/>
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
            <LogoTwitter  />
            </a>
            <a href="" target="_blank">
            <LogoEmail />
            </a>
        </nav>
    </footer>;
};
export default Component;

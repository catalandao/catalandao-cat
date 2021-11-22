import { CatDAOLogo } from "@/styles/svgs/logos";
import useTranslation from "next-translate/useTranslation";
import Link from "./Link";

const Navigation = () => {
    const { t } = useTranslation();
    // TODO i18n this
    return (
        <>
            <Link className="logo" href="/">
                <CatDAOLogo />
            </Link>
            <nav className="">
                {/* activeClass={selectedNavItemClass} className={navItemClass} */}
                <Link href="/manifest">Manifest</Link>
                <Link href="/eines">Eines</Link>
                <Link href="/comunitat">Comunitat</Link>
                <Link href="/projectes">Projectes</Link>
                <Link href="/contacte">Contacte</Link>
            </nav>
        </>
    );
};

export default Navigation;

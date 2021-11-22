import { CatDAOLogo } from "@/styles/svgs/logos";
import useTranslation from "next-translate/useTranslation";
import Link from "./Link";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navigation = () => {
    const { t } = useTranslation();
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <>
            <Link className="logo" href="/">
                <CatDAOLogo />
            </Link>

            <nav className="hidden sm:block">
                {/* activeClass={selectedNavItemClass} className={navItemClass} */}
                <Link href="/manifest">{t("common:5")}</Link>
                <Link href="/eines">{t("common:6")}</Link>
                <Link href="/comunitat">{t("common:7")}</Link>
                <Link href="/projectes">{t("common:8")}</Link>
                <Link href="/contacte">{t("common:9")}</Link>
            </nav>

            {/** Només x mobile */}
            <div className="sm:hidden">
                <Hamburger
                    direction="right"
                    role="button"
                    aria-label=""
                    label=""
                    easing="ease-in"
                    toggled={mobileMenuIsOpen}
                    toggle={setMobileMenuIsOpen}
                    hideOutline={true}
                    color={"#d3d3d3"}
                />
            </div>
        </>
    );
};

export default Navigation;

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

            <nav className="">
                {/* activeClass={selectedNavItemClass} className={navItemClass} */}
                <Link href="/manifest">Manifest</Link>
                <Link href="/eines">Eines</Link>
                <Link href="/comunitat">Comunitat</Link>
                <Link href="/projectes">Projectes</Link>
                <Link href="/contacte">Contacte</Link>
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

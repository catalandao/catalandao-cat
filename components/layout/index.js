import tw from "tailwind-styled-components";

import Head from "./Head";
import Header from "./Header";
import Cookies from "./Cookies";
import Footer from "./Footer";

const Component = ({ children }) => {
    return (
        <>
            <Head />
            <Header />
            <main>{children}</main>
            <Footer />
            <Cookies />
        </>
    );
};

export default Component;

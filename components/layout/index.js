import Head from "./Head";
import Header from "./Header";
import Cookies from "./Cookies";
import Footer from "./Footer";

const Component = ({ children, className }) => {
    return (
        <>
            <Head />
            <Header />
            <main className={className}>{children}</main>
            <Footer />
            <Cookies />
        </>
    );
};

export default Component;

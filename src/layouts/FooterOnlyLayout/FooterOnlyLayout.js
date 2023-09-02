import "./FooterOnlyLayout.scss";
import Footer from "../../components/Footer/Footer";

function FooterOnlyLayout({children}) {

    return (
        <>
            {children}
            <Footer />
        </>
    )
}

export default FooterOnlyLayout;
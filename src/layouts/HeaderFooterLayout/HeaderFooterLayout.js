import "./HeaderFooterLayout.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function HeaderFooterLayout({children}) {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default HeaderFooterLayout;
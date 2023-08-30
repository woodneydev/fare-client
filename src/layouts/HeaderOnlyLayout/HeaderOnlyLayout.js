import "./HeaderOnlyLayout.scss";
import Header from "../../components/Header/Header";


function HeaderOnlyLayout({children}) {

    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default HeaderOnlyLayout;
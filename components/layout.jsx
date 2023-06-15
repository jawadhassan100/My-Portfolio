import Navbar from './navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;
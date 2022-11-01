import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand text-light px-3">Leonard's Food Review</span>
                </nav>
            </header>

            <main className="flex-grow-1 py-5 mb-5">
                <div className="container">
                    <Outlet />                
                </div>
            </main>


            <footer className="footer bg-secondary fixed-bottom py-2">
                <div className="container">
                    <span className="text-light">Jacob Bastian &copy;2022 - <a href="https://github.com/jcubby86/CreativeProject2" className="text-light">Github Repository</a></span>
                </div>
            </footer>
        </>
    )
};

export default Layout;
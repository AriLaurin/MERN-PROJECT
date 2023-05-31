const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="nav-title">
            <h1>Folkeregisteret 2.0</h1>
            </div>
            <div className="links">
                <a href="/">Hjem</a>
                <a href="/create">Ny Person</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
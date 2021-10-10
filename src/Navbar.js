import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Something here nav</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New stuff</Link>
            </div>
        </nav>
    );
}

export default Navbar;
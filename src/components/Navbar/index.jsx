// src/components/Navbar.jsx
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/certificates">Certificates</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

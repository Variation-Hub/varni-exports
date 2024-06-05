import { Link } from 'react-router-dom'
import Style from './style.module.css'
import logo from "../../assets/logo.svg"

function Navbar() {
    return (
        <nav className={Style.navbar_container}>
            <div className={Style.logo_container}>
                <Link to="/">
                    <img src={logo} alt="logo" width="100%"/>
                </Link>
            </div>
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

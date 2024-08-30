import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"
const Navbar = () => {
    return (
        <nav className="navbar  border border-gray-300 p-2 ">
            <div className="flex justify-between">
                <div>
                    <img src={logo} alt="CollegeMate India" className="h-16"  />
                </div>
                <div className="flex items-center font-semibold" id="navbarNav">
                    <ul className="navbar-nav flex gap-5 ">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/colleges">Colleges</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/students">About us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
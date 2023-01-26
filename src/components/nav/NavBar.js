import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item navbar__locations">
                <Link className="navbar__locations" to="/locations">Locations</Link>

            </li>
            <li className="navbar__item navbar__candies">
                <Link className="navbar__candies" to="/products">Candies</Link>
            </li>
            <li className="navbar__item navbar__application">
                <Link className="navbar__application" to="/job_app">Apply Now!</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}


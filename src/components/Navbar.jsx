import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar.css'; // import your CSS file



function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link></li>
                <li>

                    <Link to="/about">About</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
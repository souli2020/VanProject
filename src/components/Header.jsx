import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'; // import your CSS file



function Header() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: '#161616',
        border: "1px solid black",
        borderRadius: '5px'

    }
    return (
        <header>
            <NavLink className="site-logo" to="/">#VanLife</NavLink>
            <nav>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >About</NavLink>
                <NavLink
                    to="/vans"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >Vans</NavLink>
                <NavLink
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >Host</NavLink>
            </nav>
        </header>
    )
}

export default Header
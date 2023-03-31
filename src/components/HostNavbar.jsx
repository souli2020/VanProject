import { useEffect, useState, React } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import HostVanDetails from '../pages/Host/HostVanDetails'

function HostNavbar() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }


    return (
        <>




            <nav className="host-van-detail-nav">
                <NavLink to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Details
                </NavLink>
                <NavLink to="pricing"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Pricing
                </NavLink>
                <NavLink to="photos"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Photos
                </NavLink>
            </nav>

        </>
    )
}

export default HostNavbar
import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header'
function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <h1>Footer</h1>

        </div>
    )
}

export default Layout
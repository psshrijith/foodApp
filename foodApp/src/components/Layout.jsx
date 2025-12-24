import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between border-2 fixed w-full bg-white z-50 shadow-md">
                <NavBar />
            </div>


            <div className="mt-[80px] px-4 py-4">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;

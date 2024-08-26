import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    return (
        <div style={{ padding: '8px 16px', marginTop: '0px' }} className="bg-gray-100 flex items-center">
            <Link to="/" className="flex items-center text-black">
                <FaHome className="mr-2" />
                Home
            </Link>
            {pathnames.length > 0 && <span className="mx-1 text-black">&gt;</span>}
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                const formattedName = name.split('-').map(capitalizeFirstLetter).join(' ');

                return isLast ? (
                    <span key={name} className="ml-1 text-black">{formattedName}</span>
                ) : (
                    <span key={name} className="flex items-center">
                        <Link to={routeTo} className="mx-1 text-black">{formattedName}</Link>
                        <span className="text-black">&gt;</span>
                    </span>
                );
            })}
        </div>
    );
}

export default Breadcrumb;
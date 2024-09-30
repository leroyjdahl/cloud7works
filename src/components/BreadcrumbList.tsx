import React from 'react';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { Link, useLocation } from 'react-router-dom';
import { getFriendlyName } from '../utils/routes';

const BreadcrumbList: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x); // Get non-empty segments

    const breadcrumbPaths = pathnames.map(
        (_, index) => `/${pathnames.slice(0, index + 1).join('/')}`,
    );

    console.log(breadcrumbPaths);

    return (
        <Breadcrumbs>
            {breadcrumbPaths.length > 0 &&
                breadcrumbPaths.map((path, index) => (
                    <BreadcrumbItem key={path}>
                        <Link to={path}>{getFriendlyName(path)}</Link>
                    </BreadcrumbItem>
                ))}
        </Breadcrumbs>
    );
};

export default BreadcrumbList;

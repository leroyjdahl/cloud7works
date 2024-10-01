import React, { useState, useCallback, memo } from 'react';
import {
    Navbar,
    Dropdown,
    Avatar,
    NavbarBrand,
    NavbarContent,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from '../icons/ChevronDown';
import { mainNavLinks, dropdownNavLinks } from '../utils/routes';

interface CustomDropdownItemProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    isActive: boolean;
    link: any;
}

const CustomDropdownItem: React.FC<CustomDropdownItemProps> = memo(
    ({ link, isOpen, onOpenChange, isActive }) => {
        return (
            <NavbarItem isActive={isActive}>
                <Dropdown
                    className="text-black"
                    placement="bottom-start"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                >
                    <DropdownTrigger>
                        <span
                            className={`cursor-pointer text-gray-600 flex items-center gap-2 ${isActive ? 'active-indicator' : ''}`}
                        >
                            {link.label}
                            <ChevronDown isOpen={isOpen} />
                        </span>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Submenu">
                        {link.subroutes?.map((sublink: any) => (
                            <DropdownItem key={sublink.path} textValue={sublink.name}>
                                <Link to={sublink.path}>{sublink.name}</Link>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </NavbarItem>
        );
    }
);

const CustomNavbar: React.FC = () => {
    const [dropdownState, setDropdownState] = useState<Record<number, boolean>>({});
    const location = useLocation();

    const handleDropdownChange = useCallback((index: number, isOpen: boolean) => {
        setDropdownState((prev) => ({ ...prev, [index]: isOpen }));
    }, []);

    const isActive = (href: string) => location.pathname.startsWith(href);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Render static links and dropdown links in mobile/desktop
    const renderMainNavLinks = mainNavLinks.map((link, index) => (
        <NavbarItem key={index} isActive={isActive(link.href)}>
            <Link to={link.href} className="flex items-center gap-2">
                {link.label}
            </Link>
        </NavbarItem>
    ));

    const renderDropdownNavLinks = dropdownNavLinks.map((link, index) => (
        <CustomDropdownItem
            key={index}
            link={link}
            isOpen={dropdownState[index] || false}
            onOpenChange={(isOpen) => handleDropdownChange(index, isOpen)}
            isActive={isActive(link.href)}
        />
    ));

    return (
        <Navbar
            isBordered
            shouldHideOnScroll
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="bg-white flex w-full"
            classNames={{
                wrapper: ['px-4'],
                item: ['flex', 'relative', 'h-full', 'items-center', 'active-indicator'],
            }}
        >
            {/* Left side: Logo and Links */}
            <NavbarContent justify="start">
                <NavbarMenuToggle className="sm:hidden" />
                <NavbarBrand>
                    <img src="/c7.png" alt="Logo" className="block h-10 w-auto" />
                    <span className="hidden md:flex ml-2 tracking-wider">CLOUD7WORKS</span>
                </NavbarBrand>
            </NavbarContent>

            {/* Right side: Links and Avatar */}
            <NavbarContent justify="end" className="hidden sm:flex gap-4">
                {renderMainNavLinks}
                {renderDropdownNavLinks}

                {/* Avatar dropdown for user info */}
                <Dropdown placement="bottom-end" className="text-black">
                    <DropdownTrigger>
                        <Avatar size="sm" />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User menu" disabledKeys={['user']}>
                        <DropdownItem key="user" showDivider>
                            Hi Barbara
                        </DropdownItem>
                        <DropdownItem key="account" showDivider>
                            <Link to="/account">Account Settings</Link>
                        </DropdownItem>
                        <DropdownItem key="help">
                            <Link to="/help">Help</Link>
                        </DropdownItem>
                        <DropdownItem key="logout" showDivider color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            {/* Mobile menu */}
            <NavbarMenu className="text-black">
                {mainNavLinks.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link to={item.href} className="w-full">
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
                {dropdownNavLinks.map((link, index) => (
                    <NavbarMenuItem key={index + mainNavLinks.length}>
                        <CustomDropdownItem
                            link={link}
                            isOpen={dropdownState[index + mainNavLinks.length]}
                            onOpenChange={(isOpen) => handleDropdownChange(index + mainNavLinks.length, isOpen)}
                            isActive={isActive(link.href)}
                        />
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <Link to="/logout">Logout</Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default CustomNavbar;
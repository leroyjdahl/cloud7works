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

const CustomDropdownItem = memo(
    ({ link, isOpen, onOpenChange, isActive }: any) => {
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
                            className={`cursor-pointer text-gray-600 flex items-center gap-2 ${isActive ? 'data-[active=true]:after:content-[""] data-[active=true]:after:absolute data-[active=true]:after:bottom-2 data-[active=true]:after:left-0 data-[active=true]:after:right-0 data-[active=true]:after:h-[5px] data-[active=true]:after:rounded-[2px] data-[active=true]:after:bg-black' : ''}`}
                        >
                            {link.label}
                            <ChevronDown isOpen={isOpen} />
                        </span>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Submenu">
                        {link.subroutes?.map((sublink: any, index: number) => (
                            <DropdownItem key={sublink.path} textValue={sublink.name}>
                                <Link to={sublink.path}>{sublink.name}</Link>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </NavbarItem>
        );
    },
);

const CustomNavbar: React.FC = () => {
    const [dropdownState, setDropdownState] = useState<{
        [key: number]: boolean;
    }>({});
    const location = useLocation();

    const handleDropdownChange = useCallback((index: number, isOpen: boolean) => {
        setDropdownState(prev => ({ ...prev, [index]: isOpen }));
    }, []);

    const isActive = (href: string) => {
        return location.pathname === href || location.pathname.startsWith(href);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Navbar
                isBordered
                shouldHideOnScroll
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                className="bg-white flex w-full"
                classNames={{
                    wrapper: ['px-4'],

                    item: [
                        'flex',
                        'relative',
                        'h-full',
                        'items-center',
                        "data-[active=true]:after:content-['']",
                        'data-[active=true]:after:absolute',
                        'data-[active=true]:after:bottom-2',
                        'data-[active=true]:after:left-0',
                        'data-[active=true]:after:right-0',
                        'data-[active=true]:after:h-[5px]',
                        'data-[active=true]:after:rounded-[2px]',
                        'data-[active=true]:after:bg-black',
                    ],
                }}
            >
                {/* Left side: Logo and Links */}
                <NavbarContent justify="start">
                    <NavbarMenuToggle className="sm:hidden" />
                    <NavbarBrand>
                        {/* <div className="h-[40px] w-[150px] bg-[#D9D9D9] text-black justify-center items-center flex">
                            WEB PORTAL LOGO
                        </div> */}
                        <img
                            src="/c7.png"
                            alt="Logo"
                            className="hidden sm:block h-10 w-auto"
                        />
                        <span className='hidden md:flex ml-2 tracking-wider'>CLOUD7WORKS</span>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent justify="end" className="hidden sm:flex gap-4">
                    {/* Static links */}
                    {mainNavLinks.map((link, index) => (
                        <NavbarItem key={index} isActive={isActive(link.href)}>
                            <Link to={link.href} className="flex items-center gap-2">
                                <span>{link.label}</span>
                            </Link>
                        </NavbarItem>
                    ))}

                    {/* Dropdown links w/ chevron */}
                    {dropdownNavLinks.map((link, index) => {
                        const isActiveDropdown = isActive(link.href);
                        return (
                            <CustomDropdownItem
                                key={index}
                                link={link}
                                isOpen={dropdownState[index]}
                                onOpenChange={(isOpen: boolean) =>
                                    handleDropdownChange(index, isOpen)
                                }
                                isActive={isActiveDropdown}
                            />
                        );
                    })}

                    {/* Avatar dropdown user info */}
                    <Dropdown placement="bottom-end" className="text-black">
                        <DropdownTrigger>
                            <Avatar size="sm" />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="User menu" disabledKeys={['user']}>
                            <DropdownItem key="user" showDivider>
                                {'Hi Barbara'}
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
                            <Link
                                color={
                                    index === 2
                                        ? 'primary'
                                        : index === mainNavLinks.length - 1
                                            ? 'danger'
                                            : 'foreground'
                                }
                                className="w-full"
                                to={item.href}
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    {dropdownNavLinks.map((link, index) => (
                        <NavbarMenuItem key={index + mainNavLinks.length}>
                            <CustomDropdownItem
                                link={link}
                                isOpen={dropdownState[index + mainNavLinks.length]}
                                onOpenChange={(isOpen: boolean) =>
                                    handleDropdownChange(index + mainNavLinks.length, isOpen)
                                }
                                isActive={isActive(link.href)}
                            />
                        </NavbarMenuItem>
                    ))}
                    <NavbarMenuItem>
                        <Link to="/logout">Logout</Link>
                    </NavbarMenuItem>
                </NavbarMenu>
            </Navbar>
        </>
    );
};

export default CustomNavbar;

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
    NavbarMenuToggle
} from '@nextui-org/react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from '../icons/ChevronDown';

const CustomDropdownItem = memo(({ link, isOpen, onOpenChange }: any) => {
    return (
        <NavbarItem>
            <Dropdown
                className='text-black'
                placement="bottom-start"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <DropdownTrigger>
                    <span className='cursor-pointer text-gray-600 flex items-center gap-2'>
                        {link.label}
                        <ChevronDown isOpen={isOpen} />
                    </span>
                </DropdownTrigger>
                <DropdownMenu aria-label="Submenu">
                    {link.links.map((sublink: any, index: number) => (
                        <DropdownItem key={index}>
                            <Link to={sublink.href}>{sublink.label}</Link>
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </NavbarItem>
    );
});

const CustomNavbar: React.FC = () => {
    const [dropdownState, setDropdownState] = useState<{ [key: string]: boolean }>({});
    const location = useLocation();

    const NavLinks = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Lorem Ipsum', href: '/lorem' },
        { label: 'Dolor', href: '/dolor' },
    ];

    const dropdownNavLinks = [
        { label: 'Sit Amet', links: [{ label: 'Dolor', href: '/dolor' }, { label: 'Sit Amet', href: '/sit' }] },
        { label: "Ullamcorper", links: [{ label: 'Dolor', href: '/dolor' }, { label: 'Sit Amet', href: '/sit' }] },
        { label: "Morbi Rutrum", links: [{ label: 'Dolor', href: '/dolor' }, { label: 'Sit Amet', href: '/sit' }] },
    ];

    const handleDropdownChange = useCallback((index: number, isOpen: boolean) => {
        setDropdownState((prev) => ({ ...prev, [index]: isOpen }));
    }, []);

    const isActive = (href: string) => location.pathname === href;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar
            isBordered
            shouldHideOnScroll
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className='bg-white flex justify-around w-full'
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-2",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[5px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-black",
                ]
            }}
        >
            {/* Left side: Logo and Links */}
            <NavbarContent>
                <NavbarMenuToggle className="sm:hidden" />
                <NavbarBrand>
                    <div className='h-[40px] w-[150px] bg-[#D9D9D9] text-black justify-center items-center flex'>WEB PORTAL LOGO</div>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify='end' className="hidden sm:flex gap-4">
                {/* Static links */}
                {NavLinks.map((link, index) => (
                    <NavbarItem key={index} isActive={isActive(link.href)}>
                        <Link to={link.href} className='flex items-center gap-2'>
                            <span>{link.label}</span>
                        </Link>
                    </NavbarItem>
                ))}

                {/* Dropdown links w/ chevron */}
                {dropdownNavLinks.map((link, index) => (
                    <CustomDropdownItem
                        key={index}
                        link={link}
                        isOpen={dropdownState[index]}
                        onOpenChange={(isOpen: boolean) => handleDropdownChange(index, isOpen)}
                    />
                ))}

                {/* Avatar dropdown user info */}
                <Dropdown placement="bottom-end" className='text-black'>
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
            <NavbarMenu className='text-black'>
                {NavLinks.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === NavLinks.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            to={item.href}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
                {dropdownNavLinks.map((link, index) => (
                    <NavbarMenuItem>
                        <CustomDropdownItem
                            key={index + dropdownNavLinks.length}
                            link={link}
                            isOpen={dropdownState[index + dropdownNavLinks.length]}
                            onOpenChange={(isOpen: boolean) => handleDropdownChange(index, isOpen)}
                        />
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    Logout
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default CustomNavbar;
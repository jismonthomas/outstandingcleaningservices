'use client';
import { PrismicNextLink } from '@prismicio/next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const MobileMenu = ({ menuItems }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const pathname = usePathname();

    const menuToggle = (e) => {
        e.preventDefault();
        setMenuOpen((state) => !state);
    };

    useEffect(() => {
        if (menuOpen) {
            setMenuOpen((state) => !state);
        }
        // console.log('router change');
    }, [pathname]);

    // console.log('Menu Open', menuOpen);

    return (
        <div>
            <div className="lg:hidden p-2" onClick={(e) => menuToggle(e)}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="">
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
            </div>

            {menuOpen && (
                <div className=" fixed h-full w-full left-0 top-0 z-40 backdrop-blur-md">
                    <div className="bg-white fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] rounded-lg py-3 px-8">
                        <div className="border-b py-3 flex justify-between">
                            <span>MENU</span>
                            <div onClick={(e) => menuToggle(e)}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="close">
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            {menuItems.map((menuItem) => {
                                return (
                                    menuItem[1].id && (
                                        <PrismicNextLink
                                            field={menuItem[1]}
                                            key={menuItem}
                                            className="py-3 block capitalize leading-none">
                                            {menuItem[1].slug}
                                        </PrismicNextLink>
                                    )
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className="bg-black bg-opacity-50 fixed h-full w-full left-0 top-0 z-40 backdrop-blur-md"
                        onClick={(e) => menuToggle(e)}></div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;

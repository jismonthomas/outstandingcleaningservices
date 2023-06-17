import Link from 'next/link';
import { createClient } from '../../prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

const getData = async (type) => {
    const client = createClient();
    const document = await client.getSingle(type);
    try {
        console.log('footer document', document);
        return document.data;
    }
    catch (e) {
        console.log('could not fecth data');
        return;
    }
};

const Footer = async () => {
    const footer = await getData('footer');
    const logo = footer.logo;
    const menuItems = Object.entries(footer).slice(1);

    console.log('menuItems', menuItems);

    return (
        <footer>
            <div className='bg-white py-12 xl:py-24'>
                <div className='container'>
                    <div className='flex justify-between items-center py-8 max-xl:flex-col'>
                        <Link href='/'>
                            <PrismicNextImage field={logo} />
                        </Link>

                        <div className='max-xl:mt-12'>
                            {
                                menuItems.map(menuItem => {
                                    return menuItem[1].id &&
                                        <PrismicNextLink
                                            field={menuItem[1]}
                                            key={menuItem}
                                            className='py-5 px-2 sm:px-5 xl:px-10 inline-block capitalize leading-none'
                                        >
                                            {menuItem[1].slug}
                                        </PrismicNextLink>;
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-[#F5F4F4] text-[12px] uppercase tracking-widest py-6'>
                <div className='container'>
                    <div className='flex justify-between max-lg:flex-col max-lg:items-center gap-3'>
                        <div className=''>
                            © {new Date().getFullYear()} . All Rights Reserved
                        </div>
                        <div className=' font-semibold'>
                            <Link href="https://www.jismonthomas.com/" target='_blank'>A website by Jismon</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
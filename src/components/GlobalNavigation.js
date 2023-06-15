import Link from 'next/link';
import { createClient } from '../../prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

const getData = async (type) => {
    const client = createClient();
    const document = await client.getSingle(type);
    try {
        // console.log('document', document);
        return document.data;
    }
    catch (e) {
        console.log('could not fecth data');
        return;
    }
};

const GlobalNavigation = async () => {
    const settings = await getData('settings');
    const logo = settings.white_letter_logo;

    const globalNavigation = await getData('global_navigation');
    const menuItems = Object.entries(globalNavigation);

    return (
        <div className=' bg-primary-blue'>
            <div className='container'>
                <div className='flex justify-between items-center py-8'>
                    <Link href='/'>
                        <PrismicNextImage field={logo} priority />
                    </Link>

                    <div className='bg-white font-semibold rounded-[5px]'>
                        <div className='max-lg:hidden'>
                            {
                                menuItems.map(menuItem => {
                                    return menuItem[1].id &&
                                        <PrismicNextLink
                                            field={menuItem[1]}
                                            key={menuItem}
                                            className='py-5 px-10 inline-block capitalize leading-none'
                                        >
                                            {menuItem[1].slug}
                                        </PrismicNextLink>;
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalNavigation;
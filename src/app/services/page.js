import { createClient } from '../../../prismicio';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import CallToAction from '@/components/CallToAction';
import PageHeaderInner from '@/components/PageHeaderInner';


const getData = async (pageId) => {
    const client = createClient();
    const document = await client.getSingle(pageId);
    const data = document.data;
    // console.log('data data', data);
    return data;
};


const ServicesPage = async () => {
    const data = await getData("services");
    const header = data.slices.filter(slice => slice.slice_type === 'header');
    const services = data.slices.filter(slice => slice.slice_type === 'service_item');

    console.log('services data: ', data);

    return (
        <main>
            <PageHeaderInner headerSlice={header} />
            <section>
                <div className='section-wrapper'>
                    <div className='container'>
                        <div className='flex max-lg:flex-col flex-wrap justify-between gap-12 2xl:gap-24 services'>
                            {services[0].items.map((serviceItem, i) => {
                                return <div
                                    key={`${serviceItem}${i}`}
                                    className='rounded-lg p-7 sm:p-14 lg:w-[45%]'
                                    style={{ background: serviceItem.theme }}
                                >

                                    <PrismicNextImage field={serviceItem.icon} className='w-[180px]' />
                                    <h2
                                        className='mt-8 lg:mt-20'>
                                        {serviceItem.heading}
                                    </h2>
                                    <div className='mt-5'>
                                        <PrismicRichText field={serviceItem.description} />
                                    </div>
                                </div>;
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </main>
    );
};

export default ServicesPage;

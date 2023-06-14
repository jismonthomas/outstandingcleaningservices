import PageHeader from '@/components/PageHeader';
import { createClient } from '../../prismicio';
import Slider from '@/components/Slider';
import { PrismicImage, PrismicRichText } from '@prismicio/react';


export default async function Home() {
    const client = createClient();

    const getData = async (pageId) => {
        try {
            const document = await client.getSingle(pageId);
            // console.log('document: ', document.data);
            return document.data;
        }
        catch (e) {
            console.log('fetch error', e);
        }
    };

    const data = await getData("home"); //error here
    // const servicePage = await getData("services"); //error here
    const header = data?.slices?.filter(slice => slice.slice_type === 'header');
    const slider = data.slices.filter(slice => slice.slice_type === 'image_slider');
    const services = servicePage.slices.filter(slice => slice.slice_type === 'service_item');
    // console.log('header :', header);
    // console.log('slider :', slider);
    // console.log('services',services);



    return (
        <main>
            <PageHeader
                headerSlice={header}
            />
            <section className='bg-gradient-to-b from-primary-blue from-20% to-transparent to-20%'>
                <div className='section-wrapper'>
                    <div className='container'>
                        <Slider content={slider} />
                    </div>
                </div>
            </section>

            <section>
                <div className='section-wrapper small'>
                    <div className='container'>
                        <div className='sm:w-6/12'>
                            <div className='section-heading lg:text-right leading-none'>
                                <PrismicRichText
                                    field={data.section_3_left_side}
                                />
                            </div>
                        </div>
                        <div className='w-11/12 sm:w-6/12 ml-auto mt-10 lg:mt-28'>
                            <PrismicRichText field={data.section_3_right_side} />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <div className='section-wrapper small'>
                    <div className='container'>
                        <div className='flex max-lg:flex-col flex-wrap justify-between gap-12 2xl:gap-24 services'>
                            {services[0].items.map((serviceItem, i) => {
                                return <div
                                    key={`${serviceItem}${i}`}
                                    className='rounded-lg p-14 lg:w-5/12'
                                    style={{ background: serviceItem.theme }}
                                >
                                    <PrismicImage field={serviceItem.icon} className='w-[100px]' />
                                    <h2
                                        className='mt-8'>
                                        {serviceItem.heading}
                                    </h2>
                                    <div className='mt-5'>
                                        <PrismicRichText field={serviceItem.excerpt} />
                                    </div>
                                </div>;
                            })}
                        </div>
                    </div>
                </div>
            </section> */}

        </main>
    );
}

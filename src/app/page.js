import PageHeader from '@/components/PageHeader';
import { createClient } from '../../prismicio';
import Slider from '@/components/Slider';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import CallToAction from '@/components/CallToAction';

export const metadata = {
    title: 'Outstanding Cleaning Services - Residential & Commercial cleaning services in Vancouver',
    description:
        'Providing Outstanding Cleaning Services at Whistler, Squamish, Vancouver, Burnaby, and Surrey.',
    keywords: ['oustanding cleaning', 'residential', 'commercial'],
};

const getData = async (pageId) => {
    const client = createClient();
    const document = await client.getSingle(pageId);
    const data = document.data;
    // console.log('data data', data);
    return data;
};

const Home = async () => {
    const data = await getData('home');
    // console.log('received data : ', data);
    const header = data?.slices?.filter(
        (slice) => slice.slice_type === 'header'
    );
    const slider = data?.slices.filter(
        (slice) => slice.slice_type === 'image_slider'
    );
    const servicePage = await getData('services');
    const services = servicePage.slices.filter(
        (slice) => slice.slice_type === 'service_item'
    );

    return (
        <main>
            <PageHeader headerSlice={header} />
            <section className="bg-gradient-to-b from-primary-blue from-20% to-transparent to-20%">
                <div className="section-wrapper">
                    <div className="container">
                        <Slider content={slider} />
                    </div>
                </div>
            </section>

            <section>
                <div className="section-wrapper small">
                    <div className="container">
                        <div className="sm:w-6/12">
                            <div className="section-heading lg:text-right leading-none">
                                <PrismicRichText
                                    field={data?.section_3_left_side}
                                />
                            </div>
                        </div>
                        <div className="w-11/12 sm:w-6/12 ml-auto mt-10 lg:mt-28">
                            <PrismicRichText
                                field={data?.section_3_right_side}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="section-wrapper">
                    <div className="container">
                        <div className="flex max-lg:flex-col flex-wrap justify-between gap-12 2xl:gap-24 services">
                            {services[0].items.map((serviceItem, i) => {
                                return (
                                    <div
                                        key={`${serviceItem}${i}`}
                                        className="rounded-lg p-7 sm:p-14 lg:w-5/12"
                                        style={{
                                            background: serviceItem.theme,
                                        }}>
                                        <PrismicNextImage
                                            field={serviceItem.icon}
                                            className="w-[100px]"
                                        />
                                        <h2 className="mt-8">
                                            {serviceItem.heading}
                                        </h2>
                                        <div className="mt-5">
                                            <PrismicRichText
                                                field={serviceItem.excerpt}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </main>
    );
};

export default Home;

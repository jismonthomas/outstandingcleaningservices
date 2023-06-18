import PageHeaderInner from '@/components/PageHeaderInner';
import { createClient } from '../../../prismicio';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import CallToAction from '@/components/CallToAction';

const getData = async (pageId) => {
    const client = createClient();
    const document = await client.getSingle(pageId);
    const data = document.data;
    return data;
};

const AboutPage = async () => {

    const data = await getData("about");
    const header = data?.slices.filter(slice => slice.slice_type === 'header');
    const section1Image = data.image;
    const section1Heading = data.image_heading;
    const section1Text = data.image_text;
    const whychooseLeft = data?.slices[0];
    const whychooseRight = data?.slices[1];
    const vision = data?.slices[2];
    const values = data?.slices[3];

    console.log('AboutPage Data', data);

    return (
        <main>

            <PageHeaderInner headerSlice={header} />

            <section className='bg-gradient-to-b from-primary-blue from-20% to-transparent to-20%'>
                <div className='section-wrapper'>
                    <div className='container'>
                        <div className='rounded-[20px] relative overflow-hidden'>
                            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white overlayText min-w-[80%]'>
                                <div className='section-heading'>
                                    <PrismicRichText field={section1Heading} />
                                </div>
                                <PrismicRichText field={section1Text} />
                            </div>
                            <PrismicNextImage field={section1Image} className='min-h-[70vh] object-cover' />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=''>
                    <div className='container'>
                        <div className='lg:w-8/12'>
                            <div className='section-heading mb-4 lg:mb-10'>
                                <PrismicRichText field={whychooseLeft.primary.heading} />
                            </div>
                            <PrismicRichText field={whychooseLeft.primary.text} />
                        </div>

                        <div className='lg:ml-auto lg:w-8/12 mt-10'>
                            {whychooseRight.items.map((item, index) => {
                                return <PrismicRichText field={item.paragraph} />;
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='section-wrapper'>
                    <div className='container'>
                        <div className='bg-[#F1F5F8] rounded-[20px] p-10 lg:p-20'>
                            <div className='lg:w-5/12'>
                                <div className='section-heading small mb-4'>
                                    <PrismicRichText field={vision.primary.heading} />
                                </div>
                                <PrismicRichText field={vision.primary.text} />
                            </div>

                            <div className='lg:w-5/12 lg:ml-auto mt-10 lg:mt-16'>
                                <div className='section-heading small mb-4'>
                                    <PrismicRichText field={values.primary.heading} />
                                </div>
                                <PrismicRichText field={values.primary.text} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </main>
    );
};

export default AboutPage;

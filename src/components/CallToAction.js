import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { createClient } from '../../prismicio';

const getData = async (pageId) => {
    const client = createClient();
    const document = await client.getSingle(pageId);
    const data = document.data;
    // console.log('data data', data);
    return data;
};

const CallToAction = async () => {


    const data = await getData("home");
    const ctaSlice = data?.slices.filter(slice => slice.slice_type === 'call_to_action');
    const headingLines = ctaSlice[0].items;
    const paragraph = ctaSlice[0].primary.description;

    // console.log('para', headerSlice[0].primary.description);
    return (
        <section className={`flex w-full items-center justify-center bg-primary-blue text-white ${ctaSlice[0].variation} callToAction`}>
            <div className='section-wrapper'>
                <div className='container text-center'>
                    <h1>
                        {
                            headingLines.map(({ title_line }) => {
                                return <span className='block whitespace-nowrap' id={title_line}>
                                    {title_line}
                                </span>;
                            })
                        }
                    </h1>
                    <PrismicRichText field={paragraph} />

                    <div className='flex mt-12 gap-6 md:gap-12 items-center justify-center max-sm:flex-col'>
                        <PrismicLink field={ctaSlice[0].primary.primary_button} className='button primary max-sm:w-full'>
                            <span className='button-label'>
                                {ctaSlice[0].primary.primary_button_text}
                            </span>
                            <span className='button-label'>
                                <span>
                                    {ctaSlice[0].primary.primary_button_text}
                                </span>
                            </span>
                        </PrismicLink>

                        <PrismicLink field={ctaSlice[0].primary.secondary_button} className='button secondary max-sm:w-full'>
                            <span className='button-label'>
                                {ctaSlice[0].primary.secondary_button_text}
                            </span>
                            <span className='button-label'>
                                <span>
                                    {ctaSlice[0].primary.secondary_button_text}
                                </span>
                            </span>
                        </PrismicLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
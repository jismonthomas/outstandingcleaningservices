import PageHeader from '@/components/PageHeader';
import { createClient } from '../../prismicio';
import { PrismicRichText } from '@prismicio/react';
import Slider from '@/components/Slider';


export default async function Home() {
    const client = createClient();

    const getData = async () => {
        try {
            const document = await client.getSingle("home");
            const header = document?.data?.slices?.filter(slice => slice.variation === 'headerWithButton');
            // console.log('document: ', document.data);
            return header;
        }
        catch (e) {
            console.log('fetch error', e);
        }
    };

    const header = await getData();
    console.log('header :', header);

    // const slider = document.data.slices.filter(slice => slice.slice_type === 'image_slider');


    return (
        <main>
            {/* <PageHeader
            headerSlice={header}
            /> */}
            <section className='bg-gradient-to-b from-primary-blue from-20% to-transparent to-20%'>
                <div className='section-wrapper'>
                    <div className='container'>
                        {/* <Slider content={slider} /> */}
                    </div>
                </div>
            </section>

            <section>
                <div className='min-h-screen'></div>
            </section>
        </main>
    );
}

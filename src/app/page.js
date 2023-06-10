'use client';
import PageHeader from '@/components/PageHeader';
import { createClient } from '../../prismicio';
import { PrismicRichText } from '@prismicio/react';
import Slider from '@/components/Slider';
import { useState } from 'react';


export default async function Home() {
    const client = createClient();
    const [data, setData] = useState();

    const getData = async () => {
        try {
            const document = await client.getSingle("home");
            // console.log('document: ', document.data);
            setData(document.data);
            return;
        }
        catch (e) {
            console.log('fetch error', e);
        }
    };

    // const data = await getData(); //error here
    // const header = data?.slices?.filter(slice => slice.slice_type === 'header');
    // const slider = data.slices.filter(slice => slice.slice_type === 'image_slider');
    // console.log('header :', header);
    // console.log('slider :', slider);



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

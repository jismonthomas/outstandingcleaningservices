'use client';
import { register } from 'swiper/element/bundle';
import { useEffect, useRef, useState } from 'react';
import styles from './slider.module.css';
import 'swiper/element/css/autoplay';
import 'swiper/element/css';
import Image from 'next/image';

import image from '../../public/images/outstanding-cleaning-residential-cleaning.png';
import image2 from '../../public/images/outstanding-cleaning-commercial-cleaning.png';
import image3 from '../../public/images/outstanding-cleaning-janitorial-cleaning.png';
import image4 from '../../public/images/outstanding-cleaning-moving-cleaning.png';
import { PrismicNextImage } from '@prismicio/next';


//register swiper globally
register();

const Slider = ({ content }) => {

    const swiperElRef = useRef(null);
    const sliderContent = content[0].items;
    const [activeSlide, setActiveSlide] = useState(0);

    // useEffect(() => {

    //     swiperElRef.current.addEventListener('slidechange', (e) => {
    //         // console.log('slide changed', e.detail[0].realIndex);
    //         setActiveSlide(e.detail[0].realIndex);
    //     });

    //     const swiperContainer = swiperElRef.current;
    //     const params = {
    //         autoplay: {
    //             delay: 2500,
    //             disableOnInteraction: false,
    //         },
    //         effect: "fade",
    //         // navigation: true,
    //         // pagination: true,
    //         injectStyles: [
    //             `
    //             swiper-slide {
    //                 min-height: 50vh;
    //                 border-radius: 20px;
    //                 overflow: hidden;
    //             }
    //         `,
    //         ],
    //     };

    //     Object.assign(swiperContainer, params);
    //     swiperContainer.initialize();
    // }, []);

    console.log('slider content: ', content[0].items);

    return (
        // <div className={`${styles.homeServiceSlider} relative overflow-hidden rounded-[20px]`}>
        //     <swiper-container slides-per-view="1" speed="1000" loop="true" init="false" ref={swiperElRef}>

        //         {
        //             sliderContent.map((slide, i) => {
        //                 return <swiper-slide key={`slide-${i}`}>
        //                     <PrismicNextImage field={slide.image} />
        //                 </swiper-slide>;
        //             })

        //         }

        //     </swiper-container>

        //     <div className='absolute left-0 bottom-0 flex justify-between px-16 pb-16 w-full z-2 font-headings text-white font-semibold'>
        //         {
        //             sliderContent.map((slide, i) => {
        //                 return <div key={`caption-${i}`}>
        //                     <span>{slide.caption}</span>
        //                     <span className={`${styles.progress} ${activeSlide === i ? styles.active : ''}`}></span>
        //                 </div>;
        //             })

        //         }
        //     </div>

        // </div>
        <div>sludeasds</div>
    );
};

export default Slider;
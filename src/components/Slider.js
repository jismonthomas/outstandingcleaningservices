'use client';
import { register } from 'swiper/element/bundle';
import { useEffect, useRef, useState } from 'react';
import styles from './slider.module.css';
import 'swiper/element/css/autoplay';
import 'swiper/element/css';
import { PrismicNextImage } from '@prismicio/next';


//register swiper globally
register();

const Slider = ({ content }) => {

    const swiperElRef = useRef(null);
    const sliderContent = content[0].items;
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {

        swiperElRef.current.addEventListener('slidechange', (e) => {
            // console.log('slide changed', e.detail[0].realIndex);
            setActiveSlide(e.detail[0].realIndex);
        });

        const swiperContainer = swiperElRef.current;
        const params = {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            effect: "fade",
            // navigation: true,
            // pagination: true,
            injectStyles: [
                `
                swiper-slide {
                    border-radius: 20px;
                    overflow: hidden;
                }

                swiper-slide img {
                    min-height: 50vh;
                }
            `,
            ],
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    // console.log('slider content: ', content[0].items);

    return (
        <div className={`${styles.homeServiceSlider} relative overflow-hidden rounded-[20px]`}>
            <swiper-container
                slides-per-view="1"
                speed="1000"
                loop="true"
                init="false"
                ref={swiperElRef}
            >

                {
                    sliderContent.map((slide, i) => {
                        return <swiper-slide key={`slide-${i}`}>
                            <PrismicNextImage field={slide.image} className='object-cover h-full w-full' />
                        </swiper-slide>;
                    })

                }

            </swiper-container>

            <div className='absolute left-0 bottom-0 px-8 lg:px-16 pb-8 lg:pb-16 w-full z-2 font-headings text-white md:font-medium flex max-md:flex-col justify-between max-sm:text-sm'>
                {
                    sliderContent.map((slide, i) => {
                        return <div key={`caption-${i}`} className={`text-center border border-1 border-opacity-50 border-white overflow-hidden rounded-md max-md:mb-2 last-of-type:mb-0 md:mx-4 ${styles.caption} ${activeSlide === i ? styles.active : ''}`}>
                            <span className=' mix-blend-difference relative z-2'>{slide.caption}</span>
                            <span className={`${styles.progress} ${activeSlide === i ? styles.active : ''}`}></span>
                        </div>;
                    })

                }
            </div>

        </div>
    );
};

export default Slider;
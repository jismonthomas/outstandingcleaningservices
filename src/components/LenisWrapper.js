'use client';
import { useEffect, useLayoutEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisWrapper = ({ children }) => {

    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

    let lenis;

    useIsomorphicLayoutEffect(() => {

        lenis = new Lenis();

        lenis.on('scroll', (e) => {
            // console.log(e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });

    return (
        <div>
            {children}
        </div>
    );
};

export default LenisWrapper;
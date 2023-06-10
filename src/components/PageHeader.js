import { PrismicLink, PrismicRichText } from '@prismicio/react';
import React from 'react';

const PageHeader = ({ headerSlice }) => {

    const headingLines = headerSlice[0].items;
    const paragraph = headerSlice[0].primary.description;

    // console.log('para', headerSlice[0].primary.description);
    return (
        <header className={`flex w-full items-center justify-center ${headerSlice[0].variation}`}>
            <div className='container text-center'>
                <h1>
                    {
                        headingLines.map(({ title_line }) => {
                            console.log('line', title_line);
                            return <span className='block whitespace-nowrap' id={title_line}>
                                {title_line}
                            </span>;
                        })
                    }
                </h1>
                <PrismicRichText field={paragraph} />

                <div className='flex mt-12 gap-6 md:gap-12 items-center justify-center max-sm:flex-col'>
                    <PrismicLink field={headerSlice[0].primary.primary_button} className='button primary max-sm:w-full'>
                        <span className='button-label'>
                            {headerSlice[0].primary.primary_button_text}
                        </span>
                        <span className='button-label'>
                            <span>
                                {headerSlice[0].primary.primary_button_text}
                            </span>
                        </span>
                    </PrismicLink>

                    <PrismicLink field={headerSlice[0].primary.secondary_button} className='button secondary max-sm:w-full'>
                        <span className='button-label'>
                            {headerSlice[0].primary.secondary_button_text}
                        </span>
                        <span className='button-label'>
                            <span>
                                {headerSlice[0].primary.secondary_button_text}
                            </span>
                        </span>
                    </PrismicLink>
                </div>
            </div>
        </header>
    );
};

export default PageHeader;
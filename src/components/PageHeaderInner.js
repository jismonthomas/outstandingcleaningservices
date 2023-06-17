import { PrismicRichText } from '@prismicio/react';

const PageHeaderInner = ({ headerSlice }) => {

    const headingLines = headerSlice[0].items;
    const paragraph = headerSlice[0].primary.description;
    console.log('headerSlice', headerSlice);

    // console.log('para', headerSlice[0].primary.description);
    return (
        <header className={`flex w-full items-center justify-center innerPageHeader  ${headerSlice[0].variation}`}>
            <div className='section-wrapper small'>

                <div className='container text-center'>
                    <h1>
                        {
                            headingLines.map(({ title_line }) => {
                                return <span className='block' id={title_line}>
                                    {title_line}
                                </span>;
                            })
                        }
                    </h1>
                    <PrismicRichText field={paragraph} />
                </div>
            </div>
        </header>
    );
};

export default PageHeaderInner;
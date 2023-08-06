import PageHeaderInner from '@/components/PageHeaderInner';
import { createClient } from '../../../prismicio';

import ContactForm from '@/components/ContactForm';

const getData = async (pageId) => {
    const client = createClient();
    const document = await client.getSingle(pageId);
    const data = document.data;
    return data;
};

export const metadata = {
    title: 'Contact | Outstanding Cleaning Services',
    description:
        'Contact Outstanding Cleaning services today itself to get a free quote',
    keywords: ['cleaning services', 'vancouver', 'surrey'],
};

const ContactPage = async () => {
    const data = await getData('contact');
    const header = data?.slices.filter(
        (slice) => slice.slice_type === 'header'
    );

    // console.log('ContactPage DATA: ', data);

    return (
        <main>
            <PageHeaderInner headerSlice={header} />

            <section className="bg-gradient-to-b from-primary-blue from-20% to-transparent to-20% mb-28">
                <div className="container">
                    <div className="lg:max-w-[75%] mx-auto bg-primary-light-blue rounded-[20px] p-10 lg:p-20">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;

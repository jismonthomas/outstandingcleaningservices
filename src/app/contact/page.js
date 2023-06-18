import PageHeaderInner from '@/components/PageHeaderInner';
import { createClient } from '../../../prismicio';

const getData = async (pageId) => {
    const client = createClient();
    const document = await client.getSingle(pageId);
    const data = document.data;
    // console.log('data data', data);
    return data;
};

const ContactPage = async () => {
    const data = await getData("contact");
    const header = data?.slices.filter(slice => slice.slice_type === 'header');

    // console.log('client', client);
    console.log('ContactPage DATA: ', data);

    return (
        <main>
            <PageHeaderInner headerSlice={header} />

            <div>
                <h1>Contact Page</h1>
            </div>
        </main>
    );
};

export default ContactPage;

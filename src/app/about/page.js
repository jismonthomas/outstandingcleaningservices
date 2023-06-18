import PageHeaderInner from '@/components/PageHeaderInner';
import { createClient } from '../../../prismicio';

const getData = async (pageId) => {
    const client = createClient();
    const document = await client.getSingle(pageId);
    const data = document.data;
    return data;
};

const AboutPage = async () => {

    const data = await getData("about");
    const header = data?.slices.filter(slice => slice.slice_type === 'header');

    console.log('AboutPage DATA: ', data);

    return (
        <main>

            <PageHeaderInner headerSlice={header} />
            <div>
                <h1>Aboout Page</h1>
            </div>
        </main>
    );
};

export default AboutPage;

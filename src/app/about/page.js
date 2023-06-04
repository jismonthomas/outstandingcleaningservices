import { createClient } from '../../../prismicio';


export default async function Home() {
    const client = createClient();
    // const document = await client.getSingle("home");

    // console.log('client', client);
    // console.log('PAGE DATA: ', document.data);

    return (
        <main className="flex min-h-screen">
            <div>
                <h1>Aboout Page</h1>
                {/* <PrismicRichText field={document.data.header_text} /> */}
            </div>
        </main>
    );
}

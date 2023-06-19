'use client';
import PageHeaderInner from '@/components/PageHeaderInner';
import { createClient } from '../../../prismicio';

import { sendEmail } from './utils/sendgrid';

// import { sgMail } from '@sendgrid/mail';

const msg = {
    to: 'jismonthomas18@gmail.com',
    from: 'hellojismonthomas@gmail.com', // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

const getData = async (pageId) => {
    const client = createClient();
    const document = await client.getSingle(pageId);
    const data = document.data;
    return data;
};

const ContactPage = async () => {
    const data = await getData("contact");
    const header = data?.slices.filter(slice => slice.slice_type === 'header');

    const submitMessage = async () => {
        try {
            const res = await sendEmail('jismonthomas18@gmail.com', 'Test Email', 'This is a test email from Next.js!');
            console.log('res', res);
            console.log('Email sent successfully');
            // res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            // res.status(500).json({ message: 'Internal Server Error' });
            console.log('Email NOT sent');
        }
    };

    console.log('ContactPage DATA: ', data);

    return (
        <main>
            <PageHeaderInner headerSlice={header} />

            <div>
                <h1>Contact Page</h1>
                <button onClick={submitMessage}>SENDEMAIl</button>
            </div>
        </main>
    );
};

export default ContactPage;

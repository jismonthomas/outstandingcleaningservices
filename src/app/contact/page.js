'use client';
import PageHeaderInner from '@/components/PageHeaderInner';
import { createClient } from '../../../prismicio';

import { useState } from 'react';

const getData = async (pageId) => {
    const client = createClient();
    const document = await client.getSingle(pageId);
    const data = document.data;
    return data;
};

const ContactPage = async () => {
    const [fullname, setFullname] = useState("Jon Snow");
    const [email, setEmail] = useState("jismonthomas18@gmai.com");
    const [subject, setSubject] = useState("send grid test email");
    const [message, setMessage] = useState("this is the message body of the form");

    const data = await getData("contact");
    const header = data?.slices.filter(slice => slice.slice_type === 'header');

    const submitMessage = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/sendgrid/', {
            body: JSON.stringify({
                email: email,
                fullname: fullname,
                subject: subject,
                message: message,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const { error } = await res.json();
        if (error) {
            console.log(error);
            return;
        }
        console.log(fullname, email, subject, message);
    };

    // console.log('ContactPage DATA: ', data);

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

'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [sentSuccess, setSentSuccess] = useState(false);
    const [sentError, setSentError] = useState(false);
    const submitMessage = async (e) => {
        e.preventDefault();
        // setSent(false);
        emailjs
            .sendForm(
                process.env.sendgridServiceId,
                process.env.sendgridTemplateId,
                form.current,
                process.env.sendgridPublicKey
            )
            .then(
                (result) => {
                    // alert(result.text);
                    setSentSuccess(true);
                    // setSentError(false);
                    console.log('message sent', result);
                    form.current.reset();
                },
                (error) => {
                    // alert(error.text);
                    // setSentError(true);
                    // setSentSuccess(false);
                    console.log('message NOT sent', error);
                }
            );
    };

    console.log('message sent:  ', sentSuccess);

    return (
        <div>
            <form ref={form} onSubmit={submitMessage}>
                <div className="flex w-full gap-5 lg:gap-28 max-lg:flex-col">
                    <div className="flex flex-1 flex-col">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="from_first_name"
                            className="p-5 h-14 mt-1 rounded-lg outline-primary-blue "
                            required
                        />
                    </div>
                    <div className="flex flex-1 flex-col">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="from_last_name"
                            className="p-5 h-14 mt-1 rounded-lg outline-primary-blue "
                            required
                        />
                    </div>
                </div>

                <div className="flex w-full gap-5 lg:gap-28 max-lg:flex-col mt-5">
                    <div className="flex flex-1 flex-col">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="p-5 h-14 mt-1 rounded-lg outline-primary-blue "
                            required
                        />
                    </div>
                    <div className="flex flex-1 flex-col">
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            className="p-5 h-14 mt-1 rounded-lg outline-primary-blue "
                        />
                    </div>
                </div>

                <div className="flex w-full gap-5 lg:gap-28 max-lg:flex-col mt-5">
                    <div className="flex flex-1 flex-col">
                        <label>Message</label>
                        <textarea
                            name="message"
                            className="p-5 min-h-[250px] mt-1 rounded-lg outline-primary-blue invalid:outline-red-500 "
                        />
                    </div>
                </div>
                <input
                    type="submit"
                    value="SEND MESSAGE"
                    className=" bg-primary-blue rounded-lg text-white mt-10 px-12 py-4 cursor-pointer hover:bg-primary-clean-blue"
                />
                {sentSuccess && (
                    <p className="mt-5">
                        We have received your email, one of your team member
                        will contact as soon as possible.
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;

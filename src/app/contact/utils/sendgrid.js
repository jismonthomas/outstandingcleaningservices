import sgMail from '@sendgrid/mail';

export const sendEmail = async (to, subject, text) => {
    sgMail.setApiKey(process.env.sendgridApiKey);

    const msg = {
        to,
        from: 'hellojismonthomas@gmail.com',
        subject,
        text,
    };

    try {
        await sgMail.send(msg);
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error(error);
    }
};

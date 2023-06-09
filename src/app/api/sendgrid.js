'use client';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID);

async function sendEmail(req, res) {

    try {
        // console.log("REQ.BODY", req.body);
        await sgMail.send({
            to: "jismonthomas18@gmail.com", // Your email where you'll receive emails
            from: "hellojismonthomas@gmail.com", // your website email address here
            subject: `${req.body.subject}`,
            message: 'this is the message'
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
};

export default sendEmail;
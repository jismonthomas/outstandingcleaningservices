import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID);

async function sendEmail(req, res) {

    try {
        // console.log("REQ.BODY", req.body);
        await sendgrid.send({
            to: "jismonthomas18@gmail.com", // Your email where you'll receive emails
            from: "hellojismonthomas@gmail.com", // your website email address here
            subject: `[Lead from website] :`,
            message: 'this is the message'
        });
    } catch (error) {
        // console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
};

export default sendEmail;
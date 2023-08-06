/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        accessToken: process.env.NEXT_PUBLIC_PRISMIC,
        sendgridApiKey: process.env.NEXT_PUBLIC_SENDGRID,
        sendgridServiceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
        sendgridTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID,
        sendgridPublicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY,
    },
};

module.exports = nextConfig;

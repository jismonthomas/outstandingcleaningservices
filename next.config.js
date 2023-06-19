/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        accessToken: process.env.NEXT_PUBLIC_PRISMIC,
        sendgridApiKey: process.env.NEXT_PUBLIC_SENDGRID,
    },
};

module.exports = nextConfig;

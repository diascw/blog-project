/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname: 'receitason.com',
                hostname: 'i.postimg.cc',
                protocol: 'https'
            }
        ]
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname: 'receitason.com',
                protocol: 'https'
            }
        ]
    }
};

export default nextConfig;

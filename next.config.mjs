/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: 
            [{protocol: "https", hostname: "via.placeholder.com"}]
    },

    rewrites: () =>{

        return[
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/pagina-axios",
                destination: "/axios-page",
            },            
        ]
    }
};

export default nextConfig;
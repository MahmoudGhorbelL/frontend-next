/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
    domains:["res.cloudinary.com"]
    },
    env:{
    API_URL : "http://localhost:3001/api",
    SECRET : "secret",
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY : "pk_test_51PIzg6DTEOA1rcmgLfxeoKWLZ5aDB4AKoZdT6o3zIOtkdP3Ex3BAt6fIUzCFpIgDtIo9SpAI49wRhSA6W00cBXm000pj3KPbF3",
    STRIPE_SECRET_KEY : "sk_test_51PIzg6DTEOA1rcmg4oAumrwZH5PU5hQygc44P0y1CkFuFIpfkGJKy5JqPkboTqUD4It0RV1HsxWnSef0sGT7VNeX00W6KT4HlP",    
    NEXT_PUBLIC_URL : "http://localhost:3000",
    },

}
module.exports = nextConfig
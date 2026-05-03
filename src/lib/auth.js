import { betterAuth } from "better-auth";

export const auth = betterAuth({
    // এখানে আপনার ডাটাবেস বা স্টোরেজ কনফিগারেশন থাকবে
    // আপনি যদি আপাতত ডাটাবেস ছাড়া ট্রাই করতে চান তবে documentation ফলো করুন
    emailAndPassword: {  
        enabled: true 
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ExtraSections from "@/components/ExtraSections"; // নতুন কম্পোনেন্টটি ইমপোর্ট করুন
import fs from "fs";
import path from "path";

export default function Home() {
  // JSON ডেটা রিড করা
  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const allProducts = JSON.parse(jsonData);

  // প্রথম ৩টি প্রোডাক্টকে পপুলার হিসেবে নেওয়া
  const popularProducts = allProducts.slice(0, 3);

  return (
    <div className="animate__animated animate__fadeIn space-y-10">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Popular Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-gray-900">Popular Products 🔥</h2>
          <p className="text-gray-500 font-medium">Our most loved summer essentials picked just for you.</p>
          <div className="h-1.5 w-24 bg-[#00A99D] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn btn-outline border-[#00A99D] text-[#00A99D] hover:bg-[#00A99D] hover:border-none px-10 rounded-xl font-bold">
            View All Products
          </button>
        </div>
      </section>

      {/* 3. Extra Sections: Summer Care Tips & Top Brands */}
      {/* এই কম্পোনেন্টটি আপনার ডিজাইন অনুযায়ী সব ইনফরমেটিভ পার্ট হ্যান্ডেল করবে */}
      <ExtraSections />

      {/* 4. Simple Newsletter / CTA Section (Optional but adds 'Vercel' look) */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-[#167881] rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Stay Cool This Summer!</h2>
            <p className="text-teal-100 mb-8 max-w-xl mx-auto text-lg">
             "Subscribe to our newsletter and get 10% OFF on your first order!"
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered w-full max-w-xs text-gray-800 rounded-xl" 
              />
              <button className="btn bg-[#00A99D] border-none text-white px-8 rounded-xl hover:bg-[#008c82]">
                Subscribe
              </button>
            </div>
          </div>
          {/* Decorative background shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A99D] rounded-full blur-[120px] opacity-20 -mr-20 -mt-20"></div>
        </div>
      </section>

    </div>
  );
}
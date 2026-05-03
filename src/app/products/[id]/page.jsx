import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";

const ProductDetails = async({ params }) => {
  const { id } =await params;

  // ১. JSON ডেটা রিড করা
  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const allProducts = JSON.parse(jsonData);

  // ২. নির্দিষ্ট ID অনুযায়ী প্রোডাক্ট খুঁজে বের করা
  const product = allProducts.find((p) => p.id.toString() === id);

  // যদি প্রোডাক্ট না পাওয়া যায় তবে ৪0৪ পেজ দেখাবে
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="flex flex-col md:flex-row gap-12 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 animate__animated animate__fadeIn">
        
        {/* Product Image Section */}
        <div className="w-full md:w-1/2">
          <div className="rounded-2xl overflow-hidden bg-gray-50 border">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <span className="badge bg-[#E0F2F1] text-[#00A99D] border-none font-bold uppercase tracking-wider">
              Summer Collection
            </span>
            <h1 className="text-4xl font-black text-gray-900 leading-tight">{product.name}</h1>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-400 font-medium">({product.rating} Rating)</span>
            </div>
          </div>

          <p className="text-3xl font-black text-[#00A99D]">${product.price}</p>
          
          <div className="divider"></div>
          
          <p className="text-gray-600 leading-relaxed text-lg">
            This high-quality summer essential is designed to keep you cool and stylish. 
            Made with premium materials, it's a perfect fit for your next beach trip or sunny adventure.
          </p>

          <div className="space-y-4 pt-4">
            <button className="btn bg-[#00A99D] hover:bg-[#008c82] text-white w-full md:w-64 rounded-xl border-none font-bold text-lg shadow-lg shadow-teal-100">
              Add to Cart
            </button>
            <br />
            <Link href="/products" className="inline-block text-gray-500 hover:text-[#00A99D] font-semibold transition-colors">
              ← Back to All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
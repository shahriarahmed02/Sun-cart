"use client"; // ক্লায়েন্ট সাইড ফিচার (localStorage) ব্যবহারের জন্য
import { notFound, redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function ProductDetails() {
  const params = useParams(); // Client Component এ useParams ব্যবহার করতে হয়
  const id = params?.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // ১. সেশন চেক (Client-side)
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
    if (!isAuthenticated) {
      redirect(`/login?callbackUrl=/products/${id}`);
    }

    // ২. ডেটা ফেচ করা (পাবলিক ফোল্ডার থেকে)
    const fetchProduct = async () => {
      try {
        const res = await fetch("/data/products.json");
        const allProducts = await res.json();
        const foundProduct = allProducts.find((p) => p.id.toString() === id);
        
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setProduct("not_found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // ৩. কার্ট ফাংশনালিটি
  const handleAddToCart = () => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = [...cart, { ...product, cartId: Date.now() }];
    
    localStorage.setItem("cart", JSON.stringify(newCart));
    
    // নেভবার আপডেট করার জন্য ইভেন্ট পাঠানো
    window.dispatchEvent(new Event("storage")); 
    toast.success(`${product.name} added to cart! 🛒`);
  };

  if (loading) return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg text-[#00A99D]"></span></div>;
  if (product === "not_found") return notFound();

  return (
    <div className="container mx-auto p-4 md:p-10 min-h-screen">
      <div className="card lg:card-side bg-base-100 shadow-2xl border border-gray-100 p-4 md:p-8 animate__animated animate__fadeIn rounded-3xl">
        
        {/* প্রোডাক্ট ইমেজ */}
        <figure className="lg:w-1/2 overflow-hidden rounded-2xl">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full max-h-[500px] object-cover hover:scale-105 transition-transform duration-500" 
          />
        </figure>

        {/* প্রোডাক্ট ইনফরমেশন */}
        <div className="card-body lg:w-1/2 space-y-4">
          <div>
            <div className="badge bg-[#E0F2F1] text-[#00A99D] border-none font-bold p-3 mb-2">
              SUMMER ESSENTIAL
            </div>
            <h1 className="card-title text-3xl md:text-5xl font-black text-gray-800 leading-tight">
              {product.name}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-3xl font-black text-[#00A99D] flex-grow-0">
              ${product.price}
            </p>
            <div className="rating rating-sm">
              {[1, 2, 3, 4, 5].map((star) => (
                <input 
                    key={star} 
                    type="radio" 
                    name="rating-2" 
                    className="mask mask-star-2 bg-orange-400" 
                    defaultChecked={star <= 4} 
                    readOnly 
                />
              ))}
            </div>
          </div>
           
          <div className="divider"></div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-gray-700">Product Description:</h3>
            <p className="text-gray-600 leading-relaxed italic">
              This is a premium product from SunCart. Only logged-in users can view this exclusive detail and purchase.
              Enjoy the best of summer with our handpicked collection.
            </p>
          </div>
          
          <div className="card-actions justify-end mt-8">
            <button 
              onClick={handleAddToCart}
              className="btn bg-[#00A99D] hover:bg-[#008c82] text-white w-full border-none rounded-2xl font-black text-xl shadow-lg shadow-teal-100 h-16 transform active:scale-95 transition-all"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
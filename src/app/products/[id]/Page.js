import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function ProductDetails({ params }) {
    const { id } = params;
    
    // ১. সেশন চেক করা (Authentication Requirement)
    const session = await auth.api.getSession({
        headers: await headers()
    });

    // ইউজার লগইন না থাকলে লগইন পেজে রিডাইরেক্ট করা
    if (!session) {
        redirect(`/login?callbackUrl=/products/${id}`);
    }

    // ২. ডেটা ফেচ করা
    const filePath = path.join(process.cwd(), "public", "data", "products.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const products = JSON.parse(jsonData);
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div className="text-center py-20">Product not found!</div>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200">
                <figure className="lg:w-1/2">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </figure>
                <div className="card-body lg:w-1/2">
                    <div className="badge badge-primary">{product.category}</div>
                    <h2 className="card-title text-4xl font-bold">{product.name}</h2>
                    <p className="text-gray-500 italic">Brand: {product.brand}</p>
                    
                    <div className="py-4">
                        <p className="text-lg">{product.description}</p>
                    </div>

                    <div className="flex items-center gap-10 mb-6">
                        <div>
                            <p className="text-sm opacity-60">Price</p>
                            <p className="text-3xl font-bold text-primary">${product.price}</p>
                        </div>
                        <div>
                            <p className="text-sm opacity-60">Rating</p>
                            <p className="text-xl font-semibold">⭐ {product.rating}</p>
                        </div>
                        <div>
                            <p className="text-sm opacity-60">In Stock</p>
                            <p className="text-xl font-semibold">{product.stock} units</p>
                        </div>
                    </div>

                    <div className="card-actions justify-start">
                        <button className="btn btn-primary btn-lg">Add to Cart</button>
                        <button className="btn btn-outline btn-secondary btn-lg">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import fs from "fs";
import path from "path";

export default function Home() {

  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const allProducts = JSON.parse(jsonData);

 
  const popularProducts = allProducts.slice(0, 3);

  return (
    <div className="animate__animated animate__fadeIn">
  
      <Hero />

   
      <section className="container mx-auto px-4 py-20 border-gray-500">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Popular Products</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full "></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ➕ Extra Section: Top Brands (Static) */}
      <section className="bg-base-200 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Top Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["SunShade", "BeachVibe", "SkinGlow", "Oceanic"].map((brand) => (
              <div key={brand} className="card bg-base-100 p-6 flex justify-center items-center shadow-sm hover:text-primary transition-colors cursor-default">
                <span className="text-xl font-bold italic">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
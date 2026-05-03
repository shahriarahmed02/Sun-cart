import ProductCard from "@/components/ProductCard";
import fs from "fs";
import path from "path";

const ProductsPage = () => {

  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const allProducts = JSON.parse(jsonData);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">All Summer Products</h1>
        <p className="text-gray-500">Explore our full collection of summer essentials.</p>
        <div className="h-1.5 w-24 bg-[#00A99D] mx-auto rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};


export default ProductsPage;
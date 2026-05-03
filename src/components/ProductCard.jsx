import Link from 'next/link';

const ProductCard = ({ product }) => {
  const { id, name, price, rating, image, category } = product;

  return (
    <div className="group card bg-white shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
      {/* Image Section with Overlay */}
      <figure className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Category Badge - Top Left */}
        {category && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-gray-700 shadow-sm">
            {category}
          </div>
        )}

        {/* Rating Badge - Top Right */}
        <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
          ⭐ {rating}
        </div>
      </figure>

      {/* Content Section */}
      <div className="card-body p-5">
        <h2 className="card-title text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-[#00A99D] transition-colors">
          {name}
        </h2>
        
        <div className="flex justify-between items-center mt-2">
          <p className="text-2xl font-black text-[#00A99D]">${price}</p>
          <span className="text-xs text-gray-400 font-medium italic">Summer Essential</span>
        </div>

        {/* Action Button */}
        <div className="card-actions mt-4">
          <Link 
            href={`/products/${id}`} 
            className="btn w-full bg-[#00A99D] hover:bg-[#008c82] text-white border-none rounded-xl font-bold transition-all transform active:scale-95 shadow-lg shadow-cyan-100"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
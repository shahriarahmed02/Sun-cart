import Link from 'next/link';
import { FaSprayCan, FaDroplet, FaUmbrellaBeach } from 'react-icons/fa6';

const ExtraSections = () => {
 const summerTips = [
    {
      id: "skincare",
      title: "Skincare",
      desc: "Protect your skin with SPF 50+ sunscreen.",
      // এখানে FaCream এর বদলে FaSprayCan ব্যবহার করুন
      icon: <FaSprayCan className="text-3xl" />, 
    },
    {
      id: "hydration",
      title: "Hydration",
      desc: "Drink at least 3L of water to stay fresh.",
      icon: <FaDroplet className="text-3xl" />,
    },
    {
      id: "beach-safety",
      title: "Beach Safety",
      desc: "Stay safe under the shade during noon.",
      icon: <FaUmbrellaBeach className="text-3xl" />,
    },
  ];


  return (
    <div className="space-y-16 py-16 px-4 md:px-12 bg-white">
      
      {/* --- Summer Care Tips Section --- */}
      <section>
        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">Summer Care Tips </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {summerTips.map((tip) => (
            <Link 
              key={tip.id} 
              href={`/tips/${tip.id}`} 
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-[#E0F2F1] hover:bg-[#00A99D] hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="mb-4 text-[#00A99D] group-hover:text-white transition-colors duration-500">
                {tip.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
              <p className="text-sm opacity-80">{tip.desc}</p>
              <span className="mt-4 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </section>

    
    </div>
  );
};

export default ExtraSections;
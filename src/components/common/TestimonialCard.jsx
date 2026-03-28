import { FaStar } from 'react-icons/fa';

export default function TestimonialCard({ rating, text, name, role, company, image }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col min-w-[320px] max-w-[320px] flex-shrink-0">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} className="text-[#6c47ff] text-sm" />
        ))}
      </div>
      
      <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
        "{text}"
      </p>
      
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-[#0f0d1a]">{name}</p>
          <p className="text-xs text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
}

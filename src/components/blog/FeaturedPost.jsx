export default function FeaturedPost({ category, title, author, date, readTime, excerpt, image }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="h-80 lg:h-auto overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-10 flex flex-col justify-center">
          <span className="text-[10px] font-semibold tracking-widest text-[#6c47ff] uppercase mb-4">
            {category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f0d1a] leading-tight mb-4">
            {title}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">{excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="font-medium text-gray-600">{author}</span>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

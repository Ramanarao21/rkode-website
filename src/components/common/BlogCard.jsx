import { Link } from 'react-router-dom';

export default function BlogCard({ id, category, title, excerpt, image, date, author, readTime }) {
  return (
    <Link to={`/blog/${id}`}>
      <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
        <div className="h-44 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5 flex flex-col gap-2 flex-1">
          <span className="text-[10px] font-semibold tracking-widest text-[#6c47ff] uppercase">
            {category}
          </span>
          <h3 className="text-sm font-semibold text-[#0f0d1a] leading-snug">{title}</h3>
          <p className="text-xs text-gray-500 leading-relaxed flex-1">{excerpt}</p>
          <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
            {author && <span className="font-medium text-gray-600">{author}</span>}
            {author && date && <span>•</span>}
            <span>{date}</span>
            {readTime && (
              <>
                <span>•</span>
                <span>{readTime}</span>
              </>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

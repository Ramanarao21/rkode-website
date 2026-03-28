export default function ServiceDetailCard({
  icon,
  title,
  description,
  features,
  techStack,
  image,
  stats,
  bgColor = 'bg-white',
  textColor = 'text-gray-700',
}) {
  const isHighlight = bgColor !== 'bg-white';

  return (
    <div
      className={`${bgColor} ${
        isHighlight ? 'text-white' : 'border border-gray-100'
      } rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-start gap-4 mb-5">
        <div
          className={`w-12 h-12 rounded-xl ${
            isHighlight ? 'bg-white/20' : 'bg-[#ede9ff]'
          } flex items-center justify-center text-2xl flex-shrink-0`}
        >
          {icon}
        </div>
        <div>
          <h3
            className={`text-xl font-bold ${
              isHighlight ? 'text-white' : 'text-[#0f0d1a]'
            } mb-2`}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              isHighlight ? 'text-white/90' : 'text-gray-500'
            }`}
          >
            {description}
          </p>
        </div>
      </div>

      {image && (
        <div className="mb-5 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {features && (
        <ul className="space-y-2.5 mb-5">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-center gap-2.5 text-sm ${textColor}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isHighlight ? 'bg-white' : 'bg-[#6c47ff]'
                }`}
              />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {stats && (
        <div className="grid grid-cols-2 gap-4 mt-6">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/80 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {techStack && (
        <div className="mt-5 pt-5 border-t border-gray-100">
          <p className="text-xs font-semibold text-[#6c47ff] uppercase tracking-widest">
            Tech Stack
          </p>
          <p className="text-sm text-gray-600 mt-1">{techStack}</p>
        </div>
      )}
    </div>
  );
}

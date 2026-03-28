export default function ServiceCard({ icon, title, description, link }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-[#ede9ff] flex items-center justify-center text-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-[#0f0d1a] mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
      <a
        href={link}
        className="text-sm font-medium text-[#6c47ff] hover:underline mt-auto inline-flex items-center gap-1"
      >
        Explore Service →
      </a>
    </div>
  );
}

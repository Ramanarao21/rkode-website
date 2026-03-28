export default function TeamCard({ name, role, image }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-base font-semibold text-[#0f0d1a]">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{role}</p>
    </div>
  );
}

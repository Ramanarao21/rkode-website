const footerLinks = {
  Company: ['About', 'Services', 'Blog', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  Social: ['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'],
};

export default function Footer() {
  return (
    <footer className="bg-[#f7f6fb] border-t border-gray-100 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <p className="text-lg font-bold text-[#0f0d1a] mb-3">
              <span className="text-[#6c47ff]">RK</span>ODE LABS
            </p>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              A creative digital agency building through design and engineering solutions.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-[#0f0d1a] uppercase tracking-widest mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-[#6c47ff] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          © 2026 RKode Labs. Crafted with care and ambition.
        </div>
      </div>
    </footer>
  );
}

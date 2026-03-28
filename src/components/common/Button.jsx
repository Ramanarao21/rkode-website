const variants = {
  primary: 'bg-[#6c47ff] text-white hover:bg-[#5a38e0] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed',
  secondary:
    'bg-white text-[#6c47ff] border border-[#6c47ff] hover:bg-[#ede9ff] disabled:opacity-50 disabled:cursor-not-allowed',
  ghost: 'bg-white/10 text-white border border-white/30 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed',
};

export default function Button({ children, variant = 'primary', onClick, className = '', disabled = false, ...props }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

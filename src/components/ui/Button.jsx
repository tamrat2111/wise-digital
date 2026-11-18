function Button({ children, onClick, variant = 'primary', type = 'button', className = '', disabled = false }) {
  const baseStyles = 'px-10 py-5 rounded-none font-oswald font-extrabold uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95 border-2';
  
  const variants = {
    primary: 'bg-brand-blue border-brand-blue text-white hover:bg-transparent hover:text-brand-blue dark:bg-brand-gold dark:border-brand-gold dark:text-gray-950 dark:hover:bg-transparent dark:hover:text-brand-gold shadow-[8px_8px_0px_rgba(0,0,0,0.1)]',
    secondary: 'border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white dark:border-brand-gold dark:text-brand-gold dark:hover:bg-brand-gold dark:hover:text-gray-950',
    outline: 'border-white/40 text-white bg-transparent hover:border-white hover:bg-white/10 dark:border-gray-500 dark:text-gray-100 dark:hover:border-white dark:hover:bg-white/5',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
const Badge = ({ children, variant = 'default', className = '', ...props }) => {
    const variants = {
      default: 'bg-gray-100 text-gray-700',
      success: 'bg-green-100 text-green-700',
      warning: 'bg-yellow-100 text-yellow-700',
      error: 'bg-red-100 text-red-700',
      primary: 'bg-purple-100 text-purple-700'
    };
  
    return (
      <span 
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  };

  export { Badge };

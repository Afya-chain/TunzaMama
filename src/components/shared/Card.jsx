const Card = ({ children, className = '', ...props }) => {
    return (
      <div 
        className={`bg-white rounded-xl shadow-sm p-6 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };

  export { Card };

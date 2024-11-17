const ProgressBar = ({ progress, className = '', ...props }) => {
    return (
      <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`} {...props}>
        <div 
          className="bg-purple-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
        />
      </div>
    );
  };

  export { ProgressBar };


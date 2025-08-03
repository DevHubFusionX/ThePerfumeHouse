import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  loading = false,
  icon,
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5';
  
  const variants = {
    primary: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-lg hover:shadow-xl',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white',
    whatsapp: 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = disabled || loading ? 'opacity-50 cursor-not-allowed transform-none' : '';
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
      )}
      {icon && !loading && icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;
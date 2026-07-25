import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient-border';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  ...props
}) => {
  let variantStyles = '';

  if (variant === 'default') {
    variantStyles = 'bg-white rounded-2xl shadow-sm border border-gray-100';
  } else if (variant === 'glass') {
    variantStyles = 'glass rounded-2xl';
  } else if (variant === 'gradient-border') {
    variantStyles = 'bg-white rounded-2xl relative before:absolute before:inset-0 before:-z-10 before:p-[2px] before:bg-gradient-to-r before:from-primary before:to-accent before:rounded-2xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300';
  }

  const hoverStyles = hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl' : '';

  return (
    <div className={`p-6 ${variantStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;

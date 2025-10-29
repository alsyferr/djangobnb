import React from 'react'

interface CustomButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  
}

const CustomButton: React.FC<CustomButtonProps> = ({label, onClick, className}) => {
  return (
    <div onClick={onClick} className={` py-4 bg-airbnb text-center hover:bg-airbnb-dark text-white rounded-xl transition cursor-pointer ${className}`}>
        {label}
    </div>
  )
}

export default CustomButton
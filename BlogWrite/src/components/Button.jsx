import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    className = '',
    ...props
}) 
{
    return (
        <button className={`${bgColor} ${textColor} ${className} px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`} {...props}>
            {children}
        </button>
    )
}

export default Button

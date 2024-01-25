import React from 'react'

const ProductCard = ({title, img}) => {
  return (
    <div className='w-full h-80 '>
        <img src={img} className='w-full h-64 object-cover object-center ' />
        <p className='text-2xl font-bold pt-4'>{title}</p>
    </div>
    
  )
}

export default ProductCard
import React from 'react'

const CategoryTab = ({category, handleTypeChange, name}) => {  
    const handleClick = () => {
    handleTypeChange(name);
  };
  return (
   <button onClick={handleClick} className='py-2 px-4 bg-gray-200 rounded-md active:bg-red-300/40 '>{category}</button>
  )
}

export default CategoryTab
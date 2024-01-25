import CategoryTab from '@/components/CategoryTab'
import ProductCard from '@/components/ProductCard'
import React, { useState, useEffect } from 'react'

const Products = () => {
    const [type, setType] = useState("")

    const [products, setProducts] = useState([])
    useEffect(()=> {
        const getProducts = async () => {
            const response = await fetch("http://localhost:3000/products")
            setProducts(await response.json())
        }
        getProducts()
    },[])
    useEffect(()=>{
        const getProductsByType = async () => {
            const response = await fetch(`http://localhost:3000/products?type=${type}`)
            setProducts(await response.json())
        }
        getProductsByType()
    },[type])
    const handleChange = (value) =>{
        console.log(value)
        setType(value)
    }
  return (
    <>
        <section className="bg-[url('/img/hero-img.jpg')] h-96 bg-center bg-cover pt-16" id="hero">
            <div className='flex w-full h-full bg-slate-500/40 md:bg-gradient-to-r from-cyan-300 from-15% via-white/85 via-35% to-50% '>
                <div className='flex flex-col  justify-center md:w-1/2 text-white md:text-black'>
                    <p className='pl-8 md:pl-24'>Our Solution</p> 
                    <p className='font-bold text-3xl pl-8 md:pl-24 '>Lorem</p>
                    <p className='mt-8 py-4 pl-8 text-sm md:text-base md:pl-24 lg:w-3/4 bg-gradient-to-r from-neutral-600/40 from-2%'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                </div>
            </div>
        </section>
        <section className=' flex mt-16 gap-4 justify-center'>
            <CategoryTab handleTypeChange={handleChange} name="" category="All" />
            <CategoryTab handleTypeChange={handleChange} name="e-bike" category="eBike" />
            <CategoryTab handleTypeChange={handleChange} name="electric_motorcycle" category="eMotorcycle" />
            <CategoryTab handleTypeChange={handleChange} name="scooter" category="eScooter" />
            <CategoryTab handleTypeChange={handleChange} name="electric_car" category="eCar" />
        </section>
        <section className='flex items-center justify-center'>
            <div className="grid md:grid-cols-2 mt-8 p-8 gap-8 justify-items-center max-w-4xl w-full">
                {products.map((product, index) => (
                <ProductCard img={product.image} title={product.name}  key={index}/>
                ))}
            </div>
        </section>
    </>
       

  )
}

export default Products
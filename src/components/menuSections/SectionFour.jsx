import React,{useContext} from 'react';
import ProductCard from '../card/ProductCard';
import APIContext from '../context/ApiContext';

export default function SectionFour() {

  const data = useContext(APIContext);
  const ArrayData = data.pizzas;

  return (
  <div className='flex flex-col justify-center items-center gap-10 w-full'>
    <div className='flex flex-row justify-center items-center gap-2 w-8/12'>
        <div className='bg-A4C3B2 w-full h-px'></div>
        <p className='flex flex-row justify-start items-center text-3xl font-extrabold text-6B9080 font-Urbanist uppercase'>
          pizzas
        </p>
        <div className='bg-A4C3B2 w-full h-px'></div>
    </div>
    <div className='flex flex-row justify-center items-start flex-wrap w-full gap-3 max-lg:gap-6'>
      {
        ArrayData.map((index) => {
            return <ProductCard key={index.id} {...index} />
        })
      }
    </div>
  </div>
  )
}

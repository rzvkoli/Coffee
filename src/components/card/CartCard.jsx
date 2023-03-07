import React from 'react';
import DefaultPic from '../../img/default-image.jpg';
import { HiOutlineX } from "react-icons/hi";

export default function CartCard(props) {

  const dataBill = props.bill[0]
  const setDataBill = props.bill[1]

  const removeProduct = (name) => { 

    var res = dataBill.filter(function(item) {
      return item.name !== name
    })

    setDataBill(res)
  }

  return (
    <div className='flex flex-row justify-between items-center w-8/12 p-5 border-y-2 border-3a5a40'>
        <div className='w-3/12 max-sm:hidden'>
            <img className='w-full h-full rounded' src={DefaultPic} loading='lazy' alt='PRODUCT PHOTO' />
        </div>
        <h1 className='font-Urbanist text-3a5a40 uppercase text-2xl max-md:text-base'>
          {props.index.name}
        </h1>
        <p className='flex flex-row justify-center items-center gap-1 font-mono text-xl text-3a5a40 max-md:text-sm'>
            {props.index.number}
        </p>
        <p className='flex flex-row justify-center items-center gap-1 font-mono text-3a5a40 text-xl max-md:text-sm'>
            <span className='font-Urbanist text-3a5a40 text-xl font-thin max-md:text-sm'>$</span>
            {props.index.price}
        </p>
        <button className='text-xl text-3a5a40 max-md:text-base'
        onClick={() => removeProduct(props.index.name)}>
          < HiOutlineX />
        </button>
    </div>
  );
}

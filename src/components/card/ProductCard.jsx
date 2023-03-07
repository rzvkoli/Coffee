import React , {useState,useContext} from 'react';
import DefaultPic from '../../img/default-image.jpg';
import DataCart from '../context/CartContext';
import { HiPlusSm , HiMinusSm } from "react-icons/hi";

export default function ProductCard({name,price,id}) {

    const [dataCart , setDataCart] = useContext(DataCart);
    const [counter ,  setCounter] = useState(0);

    const addToCart = () => {
        setCounter( counter => counter + 1)
        const product = {
          'id':id ,
          'name':name ,
          'price':price ,
          'number': 1
        }
        setDataCart(dataCart => [...dataCart , product]);
      }

      const removeToCart = (name) => {

        if(counter > 0){
            setCounter( counter => counter - 1)

            var targetData = dataCart.filter(function(index) {
                return index.name === name
            })
    
            var otherData = dataCart.filter(function(index) {
                return index.name !== name
            })
            
            var setTargetData = targetData.slice(1)
    
            setDataCart([...otherData , ...setTargetData]);
        }else{
            setCounter(0);
        }
      }

  return (
    <div className='flex flex-col justify-start items-center gap-3 bg-A4C3B2 w-2/12 rounded-md max-lg:w-4/12 max-sm:w-8/12'>
        <div className='w-10/12 relative -top-4'>
            <img className='w-full h-full rounded' src={DefaultPic} loading='lazy' alt='PRODUCT PHOTO' />
        </div>
        <div className='flex flex-col justify-between items-start w-9/12 h-24'>
            <h1 className='font-Urbanist text-3a5a40 font-extrabold uppercase text-2xl'>
                {name}
            </h1>
            <p className='flex flex-row justify-center items-center gap-1 font-mono text-3a5a40 text-xl'>
                <span className='font-Urbanist text-3a5a40 uppercase text-xl'>
                    $
                </span>
                {price}
            </p>
        </div>
        <div className='w-full flex flex-row justify-start items-center border-2 border-x-0 border-b-0 border-t-CCE3DE'>
            <div className='flex flex-row justify-between items-center w-full px-5 py-2'>
                <div className='flex flex-row justify-center items-center'>
                    <button className='flex flex-row justify-center items-center w-10 h-10 text-2xl text-3a5a40 focus:bg-inherit'
                    onClick={() => addToCart()}>
                        <HiPlusSm />
                    </button>
                    <button className='flex flex-row justify-center items-center w-10 h-10 text-2xl text-3a5a40 focus:bg-inherit'
                    onClick={() => removeToCart(name)}>
                        <HiMinusSm />
                    </button>
                </div>
                <div>
                    <p className='font-mono text-3a5a40 text-xl'>
                        {counter}
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

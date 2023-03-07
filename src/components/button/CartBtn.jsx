import React ,{useContext,useEffect,useState} from 'react';
import DataCart from '../context/CartContext';
import {BsCart2} from "react-icons/bs";
import {Link} from 'react-router-dom';

export default function CartButton() {

    const [dataCart] = useContext(DataCart);
    const [numberProduct , setNumberProduct] = useState(0);

    useEffect(() => {
        setNumberProduct(dataCart.length)   
    },[dataCart]);

  return (
    <div className='flex flex-row justify-center items-center bg-A4C3B2 rounded-full'>
        <button className='w-full h-full p-3 flex flex-row justify-center items-center'>
            <Link className='w-full h-full text-3xl text-3a5a40' to={'/Cart'}>
                <BsCart2 />
            </Link>
        </button>
        <span className='text-sm text-CCE3DE font-Urbanist bg-3a5a40 w-5 h-5 flex flex-row justify-center items-center rounded-full absolute top-0 left-10'>
            {numberProduct}
        </span>
    </div>
  );
}

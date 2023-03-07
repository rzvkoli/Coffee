import React,{useState,useContext} from 'react';
import CartCard from '../card/CartCard';
import {BsCart2} from 'react-icons/bs';
import DataCart from '../context/CartContext';
import DefaultBtn from '../button/DefaultBtn';

export default function BasketProducts(props) {

    const [dataCart,setDataCart] = useContext(DataCart);
    const [dataBill , setDataBill] = useState(props.dataBill);

    var sum = 0;
    var res = [];
    var arrayPrice = [];

    function showItemBill(){ 
      for (const index of dataBill) {
        res.push(<CartCard key={index.id} index={index} bill={[dataBill , setDataBill]} />);
        
        arrayPrice.push(Number(index.price));
        var numPrice = arrayPrice.reduce((a,b) => a + b , 0);
        sum = numPrice
      }
    }

    showItemBill();

    const GoMenu = () => {
      setDataCart([]);
    }

  return (
    <div className='w-full h-full flex flex-col justify-start items-center bg-CCE3DE'>
        <div className='w-full h-full'>
          {
            (() => {
              if(dataBill.length === 0){
                return(
                <div className='w-full h-screen flex flex-col justify-start items-center'>
                  <p className='w-full h-1/6 flex flex-row justify-center items-center text-4xl font-extrabold text-6B9080 font-Urbanist uppercase max-sm:text-3xl'>
                    Shopping Cart
                  </p>
                  <div className='w-full h-2/6 flex flex-row justify-center items-center pb-8'>
                    <BsCart2 className='w-2/12 h-full text-3a5a40 max-2xl:w-2/12 max-xl:w-3/12 max-md:w-4/12 max-sm:w-5/12'/>
                  </div>
                  <div className='w-full h-3/6 flex flex-col justify-start items-center gap-5'>
                    <div className='w-8/12 h-full flex flex-col justify-start items-center gap-5 pt-5 max-sm:pt-0'>
                      <p className='flex flex-row justify-center items-center flex-wrap text-4xl font-Urbanist uppercase text-6B9080 font-black max-lg:text-2xl max-sm:text-sm'>
                        Please select order again
                      </p>
                      <p className='font-Urbanist text-3a5a40 uppercase text-xl  max-sm:text-xs'>
                        Your shopping cart is empty
                      </p>
                      <div className='w-7/12 h-3/6 flex flex-col justify-start items-cente max-sm:w-full'>
                        <DefaultBtn name={'go to menu'} path={'/Menu'} onClick={() => GoMenu()}/>
                      </div>
                    </div>
                  </div>
                </div>
                );
              }else{
                return (
                  <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
                    <div className='w-full h-screen bg-CCE3DE -z-10 absolute top-5'></div>
                    <p className='w-full flex flex-row justify-center items-center text-4xl font-extrabold text-3a5a40 font-Urbanist uppercase p-10 max-sm:text-3xl'>
                      Shopping Cart
                    </p>
                    <div className='w-full flex flex-col justify-start items-center gap-5'>
                      {
                        res
                      }
                    </div>
                    <div className='w-full flex flex-row justify-center items-center gap-5'>
                      <p className='flex flex-row justify-center items-center text-4xl font-extrabold text-3a5a40 font-Urbanist uppercase'>
                        Total
                      </p>
                      <div className='flex flex-row justify-center items-center gap-1 p-5 font-Urbanist'>
                      <p className='font-Urbanist text-3a5a40 uppercase text-3xl font-thin'>
                        $
                      </p>
                      <p className='font-mono text-3a5a40 text-3xl '>
                        {
                          sum
                        }
                      </p>
                    </div>
                  </div>
                </div>
                );
              }
            })()
          }
        </div>
    </div>
  );
}

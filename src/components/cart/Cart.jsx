import React,{useEffect,useContext,useState} from 'react';
import DataCart from '../context/CartContext';
import Bill from './Bill';

export default function Cart() {
  
  const [dataCart] = useContext(DataCart);
  const [dataBill , setDataBill] = useState([]);

  useEffect(() => {

    dataCart.forEach(index => {

      if(dataBill.some((obj) => {return obj.name === index.name})){
        dataBill.forEach((item) =>{
          if(item.name === index.name){
            item['number']++
            item['price'] += Number(index.price)
            item['id'] = index.id
          }
        });
      }else{
        let newObject = {}
        newObject.name = index.name
        newObject['number'] = 1
        newObject['price'] = Number(index.price)
        newObject['id'] = index.id
        setDataBill([dataBill.push(newObject)]);
      }
    });
    
  },[dataCart]);

  return (
    <div className='w-full h-full'>
      <Bill dataBill={dataBill} />
    </div>
  );
}

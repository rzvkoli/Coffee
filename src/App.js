import React,{useEffect,useReducer,useState} from 'react';
import {Route,Routes} from "react-router-dom";
import axios from 'axios';
import Loading from './components/loading/Loading';
import APIContext from './components/context/ApiContext';
import DataCart from './components/context/CartContext';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/cart/Cart';
import NotFound from './components/404/NotFound';

const ACTIONS = {
  CALL_API: 'call-api',
  SUCCESS: 'success' ,
  ERROR : 'error'
}

// Ruducer Function

const dataRducer = (state , action) => {
  switch(action.type){
    case ACTIONS.CALL_API : {
      return{
        ... state ,
        loading : true
      }
    }
    case ACTIONS.SUCCESS : {
      return {
        ... state ,
        loading : false ,
        data : action.data
      }
    }
    case ACTIONS.ERROR : {
      return {
        ... state , 
        loading : false ,
        error : action.error
      }
    }
  }
}

const intialState = {
  data : '' ,
  loading : true , 
  error : ''
}

export default function App() {

  // const [data,setData] = useState('');
  // const [loading,setLoading] = useState(true);
  // const [err , setErr] = useState('');

  const [state , dispatch] = useReducer(dataRducer , intialState);
  const {data , loading , error} = state

  const [dataCart,setDataCart] = useState([]);

  useEffect ( ( ) => {
    dispatch({type: ACTIONS.CALL_API})
    let url = "https://mocki.io/v1/491c31df-b8e9-480c-8469-6381fb3eaf1b";
    const callApi = async() => {
      try{
        const res = await (axios.get(url))
        // setData(res.data.food);
        // setLoading(false);
        dispatch({type: ACTIONS.SUCCESS , data: res.data.food})
      }catch (err){
        // setErr(err.message)
        // setLoading(false)
        console.log(err.message)
        dispatch({type: ACTIONS.ERROR , error : err.message})
      }
    }
    
    callApi();

  },[]) 

  return (
    <>
      {
        loading ? (
          <Loading />
          ): error ? (
            <div className='w-full h-screen bg-CCE3DE flex flex-col justify-center items-center gap-5'>
              <p className='text-ff9500 font-Urbanist text-3xl uppercase'>
                error message
              </p>
              <p className='text-white font-Urbanist text-2xl uppercase'>
                {error}
              </p>
            </div>
          ):(
            <div className='m-0 p-0 w-full h-full'>
              <APIContext.Provider value={data}>
                <DataCart.Provider value={[dataCart , setDataCart]}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Menu" element={<Menu />}/>
                    <Route path="/Cart" element={<Cart />}/>
                    <Route path="*" element={<NotFound />}/>
                  </Routes>
                </DataCart.Provider>
              </APIContext.Provider>
            </div>
          )
      }
    </>
  );
}
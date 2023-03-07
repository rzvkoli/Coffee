import React from 'react';
import DefaultBtn from './button/DefaultBtn';
import Navbar from './navbar/Navbar';
import Swal from 'sweetalert2';

export default function Home() {

  const aboutMessage = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-start',
      iconColor: '#3a5a40',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: 'This page is being launched',
      customClass: {
        popup: 'rounded-none colored-toast',
        title: 'text-3a5a40 font-Urbanist uppercase',
        timerProgressBar: 'bg-3a5a40',
      },
    })
  }

  return (
    <div className='w-full h-screen bg-CCE3DE overflow-hidden'>
      <header className='flex flex-row justify-center items-start w-full '>
        <Navbar />
      </header>
      <div className='flex flex-row justify-start items-center h-5/6 w-full px-20 max-sm:px-10'>
        <div className='flex flex-col justify-center items-start gap-2 h-full w-3/10 pb-10'>
          <p className='font-Urbanist text-xl uppercase text-3a5a40 max-sm:text-lg'>
            A real Italian cafe
          </p>
          <div className='font-Urbanist text-6xl font-black uppercase text-6B9080 max-sm:text-5xl'>
            <p>Discover the</p>
            <p>taste of real</p>
            <p>coffee</p>
          </div>
          <div className='w-1/2'>
            <DefaultBtn name={'Meet us'} onClick={aboutMessage}/>
          </div>
        </div>
      </div>           
    </div>
  );
}
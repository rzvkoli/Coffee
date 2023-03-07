import React from 'react';
import DefaultBtn from '../button/DefaultBtn';

export default function NotFound() {
  return (
    <div className='w-full h-screen bg-CCE3DE flex flex-col justify-center items-center'>
      <p className='text-6B9080 font-Urbanist text-9xl'>
        404
      </p>
      <p className='text-3a5a40 text-xl font-Urbanist uppercase'>
        Page not Found
      </p>
      <div className='w-4/12 flex flex-row justify-center items-center pt-5 max-md:w-6/12 max-sm:w-8/12'>
        <DefaultBtn name={'go to home'} path={'/'} />
      </div>
    </div>
  );
}

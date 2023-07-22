import React from 'react'

export default function Login() {
  
  return (
    <>
     <div className='max-sm:bg-cover flex bg-cover bg-center items-center justify'
    style={{
        backgroundImage: `url('/images/background1.png')`,
        backgroundSize: 'full',
        backgroundRepeat: 'no-repeat',
      }}>
    <div className='max-sm:mr-8 max-sm:ml-8 max-sm:mt-28 max-sm:mb-60 flex w-[500px] max-w-1/3 mx-auto h-3/4 bg-white flex-col my-12 mx-29 pl-4 pr-4 rounded-md'>
        <h1 className='flex mt-3 text-xl text-black font-bold pt-2 relative'>TRIALSHOPPY</h1>
     <div className='flex w-full flex-col max-w-[450px]  justify-between'>
    <div className='flex w-full flex-col mb-2'>
        <p className='flex text-xl font-semibold mb-4 my-2'>Log in</p>
 <p className='flex text-sm mb-2 text-gray-700'>continue to trialshoppy</p>
    </div>
   
  <div className='flex w-full flex-col'>
    <input
    type='email'
    placeholder='Email or Mobile number'
    className='w-full text-black py-1 border border-gray-700 rounded-md'/>
  </div>
  <div className='w-full flex items-center justify-end'>
    <div className='w-full flex justify-end'>
        <input type="radio" className='w-4 h-4 mr-2  mt-1' />
        <p className='text-sm font-medium whitespace-nowrap cursor-pointer'>Remember me</p>
    </div>
  </div>
  <div className='w-full flex flex-col my-1'>
    <button className='w-full text-white my-2 bg-orange-500  rounded-md p-1 text-center flex items-center justify-center'>Request OTP</button>
  </div>
  <div className='w-full flex items-center justify-center relative py-2 my-2'>
    <div className='w-full h-[1px] bg-gray-500'></div>
    <p className='text-sm absolute  bg-[#f5f5f5]'>or</p>
  </div>
  <button className='flex w-full text-black my-2  bg-white font-semi-bold border border-gray-700 rounded-md p-1 text-center items-center justify-center '>
   <img src="/images/google.png" className='flex h-6 mr-2' />
    Continue with Google</button>
    <button className='flex w-full text-black my-2  bg-white font-semi-bold border border-gray-700 rounded-md p-1 text-center items-center justify-center '>
   <img src="/images/apple.jfif" className='flex h-6 mr-2' />
    Continue with Apple</button>
    <button className='flex w-full text-black my-2  bg-white font-semi-bold border border-gray-700 rounded-md p-1 text-center items-center justify-center '>
   <img src="/images/facebook.png" className='flex h-6 mr-2' />
    Continue with Facebook</button>
  </div>
  
 
 
  
    <div className='w-full'><p className='text-sm mb-2 text-gray-700'>New to Trialshoppy? <span className='font-semibold text-sm mb-2 cursor-pointer text-orange-600'>Sign Up</span></p></div>
    <div className='flex flex-row justify-end'>
      <button className='text-sm mb-2 text-gray-700 mx-2'> Help</button>
      <button className='text-sm mb-2 text-gray-700 mx-2'>Privacy</button>
      <button className='text-sm mb-2 text-gray-700 mx-2'>Terms</button>
    </div>
    </div>
    </div>
    </>
      
  
  )
}

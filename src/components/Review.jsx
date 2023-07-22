import React from 'react'

const Review = () => {
  return (
    <>
    
       <h2 className='text-orange-600 font-bold text-4xl text-center py-1'>Give Review</h2>
       <div className="text-center flex flex-column mx-20 bg-gray-300"> 
        <input type="text" 
    placeholder=' Full Name' 
    className='flex border text-black text-center my-1 border-gray-700 py-1 rounded-md' />
  
  <input
    type='email'
    placeholder='Email'
    className='w-full text-black py-1 my-1 text-center border border-gray-700 rounded-md'/>
        <input className='w-full text-black py-1 my-1 text-center border border-gray-700 rounded-md' type="number" name="Number" placeholder="Mobile Number"/><br/>
        <textarea className='w-full text-black text-center py-1 border border-gray-700 rounded-md'name="Review" id="" cols="30" rows="10" placeholder="Write Your Review"></textarea><br/>
        <div className='w-full flex flex-col '>
    <button className='w-full text-white  bg-orange-500  rounded-md p-1 text-center flex items-center justify-center'>Submit</button>
  </div>
       
        </div>
    </>
  )
}

export default Review

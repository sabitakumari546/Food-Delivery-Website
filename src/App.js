import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Createaccount from './components/Createaccount'
import Login from './components/Login'
import Food from './components/Food'
import Category from './components/Category'
import Review from './components/Review'
import Contactt from './components/Contactt'

function App() {
  return (
    <div>
        <Navbar />
       
        <Hero />
        <HeadlineCards />
        <Food />
        <Category />
        
       <Contactt/>
       <Review/>
    </div>
  );
}

export default App;

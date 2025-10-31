import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductCard } from './components/productCard'


function App() {
  

  return (
    <>
      <ProductCard name = "Laptop" price= "100,000.00" image= "https://picsum.photos/id/0/5000/3333"/>
      <ProductCard name = "Smartphone" price= "60,000.00" image= "https://picsum.photos/id/1/5000/3333"/>
      <ProductCard name = "Tablet" price= "30,000.00" image= "https://picsum.photos/id/2/5000/3333"/>

    </>
  )
}

export default App

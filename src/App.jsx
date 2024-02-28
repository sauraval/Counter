import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <Counter/>
     <Footer/>
    </>
  )
}

export default App

import React, { useState } from 'react'
import Navbar from "../Navbar"
import OpenNavbar from "../OpenNavbar"
import Chatbar from "../Chatbar"

const Home = () => {
  const[isOpen, setisOpen] = useState(false);
  const toggleNavbar = ()=>{
    setisOpen(!isOpen);
  }
  return (
    <>
    <main className='flex bg- h-screen w-screen overflow-hidden bg-[url(./background.png)] bg-cover bg-no-repeat'>
        <Navbar toggleNavbar={toggleNavbar} />
        <OpenNavbar isOpen={isOpen} />
        <Chatbar />
    </main>
    </>
  )
}

export default Home
import React, { useEffect, useRef, useState } from 'react'

import About from "./pages/rutas";
import Blog from "./pages/blog";

import Navbar from './navigation/navbar';



function navbar() {
  return (
    <div className="navbar">
     <Navbar/>     
    </div>
  )
}

export default Navbar




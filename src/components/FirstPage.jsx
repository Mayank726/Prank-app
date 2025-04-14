import React from 'react'
import './FirstPage.css'
import { Link } from 'react-router'

const FirstPage = () => {


  return (
    <div className='first-page'>
        <img src="../src/components/biharlogo.png" alt="" />
        <h1>Bihar Board Matric Result 2025</h1>
        <Link to="/check" >
          <button  >Check Result Here</button>
        </Link>
        <a href=""> https://matricresult2025.com</a>
    </div>
  )
}

export default FirstPage
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const Header = () => {

  const {    singleuser  , cart  }  = useSelector(state => state.usuarios ) 
  
  return (
      <>
            <div className='container-fluid contendor   bg-gradient-dark  bg-dark  mb-5  d-flex align-items-center  justify-content-around'>
                <div className='d-flex  w-50 justify-content-around align-items-center'>
                <h4 className="text-white"   >Redux toolkit Demo</h4>
                    { !singleuser  ? <h4 className='text-white' >Login </h4>  : <h4 className='text-white' >logout</h4>}
                </div>
                    <div className="d-flex align-items-center justify-content-around   opsitel  " >
                    <Link  to="/cart" className="text-white  " >Cart</Link><span className='text-white clasegrande mr-4' > {cart.length}</span>
                    </div>
                       
            </div> 
      </>
    
  )
}

export default Header
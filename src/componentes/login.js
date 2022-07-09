import React, { useEffect, useState } from 'react'
import { useDispatch  ,  useSelector} from 'react-redux' 
import { getProduc } from './slices/product/thunk'
import {  useNavigate  } from "react-router-dom"
import { getobtner } from './slices/product/product'

const initalstate = {
  nombre:"",
  password:""
}  
const Login = () => {

      const [modal , setmodal] =  useState( true )
      const Navigate =  useNavigate()
      const [session , setsession  ] =  useState( true )
      const { listausuarios  ,   singleuser   }  =  useSelector(state => state.usuarios) 
      const disptach =   useDispatch()
      const [user, setuser] =  useState( initalstate )
      const Handlechangue = ( e ) =>{
        setuser({
      
          ...user,
            [e.target.name] :  e.target.value
          })
      }

      const handlesubtmit = ( e )=>{

            e.preventDefault()
            const encontrar = listausuarios.find(item => item.username ===  user.nombre && item.email ===  user.password )
          
            if (encontrar) {
                setsession(true) 
                setTimeout(() => {
                  Navigate(`/user/${encontrar.id}`)
                  disptach(getobtner(encontrar))  
                }, 1000);
                
              
            }else{
              setTimeout(() => {
                setsession(false)  
              }, 1000);
                
            }
      }

      useEffect(()=>{
            disptach(getProduc())

      },[])

      
  return (

    <>
            <div  className='container'  >
                <h1>Login</h1>      
            <form   onSubmit={ handlesubtmit } >
                <div  className='form-group'>
                    <label htmlFor ="nombre" >Nombre</label>
                    <input required  name='nombre'  onChange={ Handlechangue }  id='nombre' className='form-control' placeholder='email' ></input> 
                </div>        
                <div className="form-group">
                        <label htmlFor ="exampleInputPassword1">Password</label>
                        <input  required  name='password'  onChange={ Handlechangue } type="password" className="form-control mb-2" id="exampleInputPassword1" placeholder="Password" />
  </div>
                
                <input  className='btn btn-primary' type="submit" ></input>


            </form>

            <div className='container'>
              {!session && <h2 className='btn-outline-danger bg-danger text-white text-center mt-5 rounded font-weight-bold ' > Datos no encontrados </h2>  
}
            </div>
            </div>
    </>
  )
}

export default Login
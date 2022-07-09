import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from "react-router-dom"
import { getclosesession } from './slices/product/product'
import {  useNavigate } from "react-router-dom"
import { getrickmortyaspi } from './slices/product/thunk'
import Singlemorty from './Singlemorty'


const Singleproduct = () => {

    const [ page , setpage  ]  = useState(1)
    const {   rickmorty }   = useSelector(state => state.usuarios)
    const {  results } =  rickmorty 
    const [dater, setdater]   = useState( )
    const navigate =  useNavigate()
    const  {    singleuser   }  =  useSelector (state => state. usuarios)
    const disptach =  useDispatch()
    const {id }   =  useParams()

    const mandararriba = ()=>{

            window.scrollTo( {
                top:0
            })
    }

    
    const Handleonclick = ()=>{
            setpage(page + 1)
            mandararriba()
            
    }


    const HandleRetrocererp = ()=>{

        setpage(page - 1)
        mandararriba()
    }


    useEffect(()=>{
        disptach(getrickmortyaspi(page))

    },[ page  ])

    const handlesessionredirevt = ()=>{
        disptach(getclosesession(false))
        navigate("/")

    }

  return (
        <>
        <div  className='text-center'>
            <h1>Welcome </h1>  <span>  {singleuser.name}</span>
        </div>        
        <hr></hr>

        <div className='grid-propio'>
        
            { results ? results.map(item => <Singlemorty   item={item} ></Singlemorty>) : <h1>CARGGNADO..........</h1>}

        </div>



        <button  className='btn btn-danger finality  position-fixed '  onClick={()=> disptach(handlesessionredirevt())}  >Close Session</button>
                        
        <div className='container text-center   mx-auto mt-5 mb-5' >


        <button  onClick={  HandleRetrocererp }  className='btn btn-primary mr-5 ' >previos</button>
        <button  onClick={ Handleonclick }  className='btn btn-primary m-4' >Next</button>

               

        </div>
       
        </>
  )
}

export default Singleproduct
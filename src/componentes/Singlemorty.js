import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addproductcart } from './slices/product/product'


const Singlemorty = ({ item }) => {
  
  const  dispatch =  useDispatch()
    
  return (

      <>
            <div  key={item.id } className="card" >
            <img className="card-img-top  Tope " src={item.image} alt="Card image cap" />
            <div className="card-body">

                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button  onClick={()=> dispatch(addproductcart(item) )}    className="btn btn-success">comprar</button>
            </div>
       
</div>



      </>
    
  )
}

export default Singlemorty
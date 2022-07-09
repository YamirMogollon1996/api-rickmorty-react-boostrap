import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eliminarproductocarrito } from './slices/product/product'


const Tablacardt = () => {

   const dispatch =  useDispatch()
    const { cart } =  useSelector(state => state.usuarios)

    return (

    <>

    <h1 className='text-center mb-5 ' >Cart  funko </h1>
    <div className='container' >
                <table className="table">
                <thead>
                    <tr className='text-muted' >
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Species</th>
                            <th scope="col">Gender</th>
                            <th  scope="col"  > S-link</th>
                            <th  scope="col"  > Action </th>
                            
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(item => <tr className='bg-light align-items-center  ' >
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                    <td>{item.species}</td>
                                    <td>{item.gender}</td>
                                    <td>
                                        <img className='renderir' src={item.image} />
                                        </td>
                                        <td>
                                        <button   onClick={ ()=> dispatch(eliminarproductocarrito(item))}  className='btn btn-warning'> Eliminar </button>

                                        </td>
                                 
                        </tr>)
                    }
                </tbody>
</table>
    </div>
    <div  className='container' >
    <hr></hr>
    </div>
    


    </>


)
}

export default Tablacardt
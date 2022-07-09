import  { createSlice, current }  from '@reduxjs/toolkit'
export const productosslice =  createSlice({
            name: "productos" ,

            initialState : {
        
                listaproductos :  [],
                listausuarios:  [],
                singleuser : false,
                rickmorty: [],
                cart : []
                
            },


            reducers : {                 
                getusuarios : (state, actions)=>{
                    state.listausuarios =  actions.payload

            },

                getobtner : (state,actions) =>{
                 
                    state.singleuser =  actions.payload
                },
                getclosesession : ( state,actions  )  =>{

                        state.singleuser =  actions.payload

                },
                getapirickmmorty : (  state , actions )=>{

                        const encontrado =  state.cart.find(item =>  item.id === actions.payload.id )
                
                        if (!encontrado){
                                state.rickmorty  = actions.payload
                        }
                                
                },


                addproductcart : (state ,actions )  =>{
                
                        const encontrado =  state.cart.find(item =>  item.id === actions.payload.id )
                        if (!encontrado) {
                
                                state.cart = [...state.cart    ,actions.payload]
                        
                        }
                        
                },
                
                eliminarproductocarrito : ( state , actions )=>{
                        state.cart  =  state.cart.filter(item => item.id != actions.payload.id)
                        
                }

               
        }
})

export const {  getusuarios  , getobtner  , getclosesession , getapirickmmorty,  addproductcart,
                        eliminarproductocarrito }   =  productosslice.actions

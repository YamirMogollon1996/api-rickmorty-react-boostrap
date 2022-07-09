import { getapirickmmorty, getusuarios } from "./product"


export const getProduc = ()=>{

    return  async (disptach, getstate) =>{

        const first =  await fetch("https://jsonplaceholder.typicode.com/users")
        const second =  await first.json()
        disptach( getusuarios(second) )
        
    }
}

export const getrickmortyaspi = (objetid)=>{


    return  async (dispatch , getstate)=>{
            
            const FirstMov = await fetch (`https://rickandmortyapi.com/api/character/?page=${objetid}`)
            const secondmov =  await FirstMov.json()
            dispatch( getapirickmmorty(secondmov) )
            

    }


}





import './App.css';
import Login from './componentes/login';
import Product from './componentes/Product';
import {  BrowserRouter  , Route, Routes } from "react-router-dom"
import { Provider } from 'react-redux'
import Header from './componentes/Header';
import { Mystore } from "./componentes/store/store"
import Singleproduct from './componentes/Singleproduct';
import Tablacardt from './componentes/Tablacardt';

function App() {
  return (
    <>


    <Provider store={  Mystore } >
        
        <BrowserRouter>

            <Header></Header>

          <Routes>

              <Route   path='/'   element =  {  <Login></Login> }   ></Route>              
              <Route   path='/user/:id'   element =  {  <Singleproduct></Singleproduct>}   ></Route>
              <Route   path='/cart'   element =  {  <Tablacardt></Tablacardt> }   ></Route>
            
          </Routes>
          
        </BrowserRouter>
      
        
    </Provider>
    
    </>
  )
}

export default App;

import React from 'react'
import {  Routes,Route  } from "react-router-dom";
import AddProduct from './Pages/admin/Product/addProduct'
import ListProduct from './Pages/admin/Product/listProduct'
import ListCategorie from './Pages/admin/Categorie/listCategorie'
import ListOrder from './Pages/admin/Order/listOrder'
import Details from './Pages/admin/Order/details'
import ListCustomer from './Pages/admin/Customer/listCustomer'

function App() {
  return (
    
      // <Routes>
      //   <Route path="/" element={<header/>}/>
      //   <Route path="/admin/addProduct" element={<AddProduct/>} />
      //   <Route path="/admin/listProduct" element={<ListProduct />} />
        
      //   <Route path="/admin/listCategorie" element={<ListCategorie />} />
      //  <Route path="/admin/Order" element={<ListOrder />} />
      //  <Route path="/admin/DetailOrder" element={<Details />} />
      // <Route path="/admin/Customer" element={<ListCustomer />} />

      // </Routes>
    
    <AddProduct />

  )
}

export default App


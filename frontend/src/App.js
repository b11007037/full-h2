import {BrowserRouter as Router, Route, Routers} from 'react-router-dom';
import React from 'react';
import ProductListComponent from './components/ProductListComponent';
import AddProductComponent from './components/AddProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Router path="/" element={<ProductListComponent />} />
          <Router path="/product" element={<ProductListComponent />} />
          <Router path="/add-product" element={<AddProductComponent />} />
          <Router path="/update-product/:id" element={<UpdateProductComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

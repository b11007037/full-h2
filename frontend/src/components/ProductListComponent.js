import React,  {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import ProductService from '../service/ProductService'; 

const ProductListComponent = () => {
    const [product, setProducts] = useState([]);

    useEffect( ()=>{
        ProductService.getProduct().then( (res) => {
            setProducts(res.data);
        } );
    }, [] );

    return(
        <div>
            <h2 className="text-center">Product</h2>
            <div className="row">
                <Link to="/add-product" className="btn btn-primary">Add Product</Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Product Name</th> 
                            <th>Product Dscription</th>
                            <th>Product Price</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td> 
                                <td>{product.discription}</td>
                                <td>{product.price}</td>
                                <td><Link to={`/update-product/${product.id}`}>Update</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductListComponent;
import React, { useEffect, useState } from "react";
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () =>{
    
    const [allproducts,setAllProducts] = useState([]);

    const fetchInfo = async ()=>{
        await fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>{setAllProducts(data)});
    }

    useEffect(()=>{
        fetchInfo();
    },[])

    const remove_product = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: Number(id) })
        });
    
        await fetchInfo();
    };

    return(
        <div className="list-product">
            <h1>All Products List</h1>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Title</th>
                        <th>Old Price</th>
                        <th>New Price</th>
                        <th>Category</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {allproducts.map((product, index) => (
                        <tr key={index}>
                            <td><img src={product.image} alt="Product" className="listproduct-product-icon"/></td>
                            <td>{product.name}</td>
                            <td>{product.old_price}</td>
                            <td>{product.new_price}</td>
                            <td>{product.category}</td>
                            <td>
                                <img onClick={() => remove_product(product.id)}
                                src={cross_icon}
                                alt="Remove Product"
                                className="listproduct-remove-icon" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListProduct
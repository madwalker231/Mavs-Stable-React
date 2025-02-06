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
            <table>
                <tr>
                    <th>Products</th>
                    <th>Title</th>
                    <th>Old Price</th>
                    <th>New Price</th>
                    <th>Category</th>
                    <th>Remove</th>
                </tr>
                <tr>
                    {allproducts.map((product,index)=>{
                        return <><div key={index} className="listproduct-format-main listproduct-format">
                            <td>
                                <img src={product.image} alt="" className="listproduct-product-icon" />
                            </td>
                        </div>
                        <hr /></>
                    })}
                </tr>
                <tr>
                    {allproducts.map((product,index)=>{
                        return <><div key={index} className="listproduct-format-main listproduct-format">
                            <td>{product.name}</td>
                        </div>
                        <hr /></>
                    })}
                </tr>
                <tr>
                    {allproducts.map((product,index)=>{
                        return <><div key={index} className="listproduct-format-main listproduct-format">
                            <td>${product.old_price}</td>
                        </div>
                        <hr /></>
                    })}
                </tr>
            </table>            
        </div>



        // <div className="list-product">
        //     <h1>All Products List</h1>
            
        //         <div className="listproduct-format-main">
        //             <p>Products</p>
        //             <p>Title</p>
        //             <p>Old Price</p>
        //             <p>New Price</p>
        //             <p>Category</p>
        //             <p>Remove</p>
        //         </div>
        //         <div className="listproduct-allproducts">
        //             <hr />
        //             {allproducts.map((product,index)=>{
        //                 return <><div key={index} className="listproduct-format-main listproduct-format">
        //                     <img src={product.image} alt="" className="listproduct-product-icon" />
        //                     <p>{product.name}</p>
        //                     <p>${product.old_price}</p>
        //                     <p>${product.new_price}</p>
        //                     <p>{product.category}</p>
        //                     <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt="" className="listproduct-remove-icon" />
        //                 </div>
        //                 <hr /></>
        //             })}
        //         </div>
            
        // </div>
    )
}

export default ListProduct
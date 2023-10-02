import { useParams } from "react-router-dom"
import { axiosInstance } from "../apis/config";
import { useEffect, useState } from 'react'
import StarsBar from "../Components/starBar";
import {Badge} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart} from "../store/slice/cart";




export default function ProductDetails() {
    const dispatch = useDispatch()
    const params = useParams()
    const [ productData, setProductData ] = useState(null)

    useEffect(() => {
        axiosInstance.get(`${params.id}`)
        .then((res) => {
          setProductData(res.data)
        })
        .catch((err) => console.log(err));
    },[]);


    return productData? (<div className="container">
        <div className="row g-5" style={{hight:"600px"}}>
            <div className="col-12 col-md-6 sec-border p-3">
                <img style={{maxHeight:"450px " ,objectFit:"cover"}} className="w-100 h-100 " src={productData.thumbnail} alt=""></img>
                <div className="" style={{display:"flex", height:"100px",width:"100% ", justifyContent:"space-around", border:"2px solid #ccc"}} >
                    {productData.images.slice(0,3).map((imageURL, index)=>{
                        return <img className="img-fluid p-1" style={{objectFit:"cover"}} src={imageURL} key={index} alt="Product"/> 
                    })}
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="mb-5">
                    <h1>{productData.title}</h1>
                    <p className="text-wrap">{productData.description}</p>
                    <Badge bg="secondary">{productData.category}</Badge>
                </div>
                <hr/>
                <div className="my-5">
                    
                    <h2 className={productData.discountPercentage? 'd-inline-block text-decoration-line-through':''} >$ {productData.price}</h2>
                    
                    {productData.discountPercentage?
        
                        <><h2 className="fst-italic d-inline-block mt-2 ms-3">${(( productData.price- productData.discountPercentage) * productData.price / 100).toFixed(1)}</h2>
                         <h5 className="text-secondary"> {(productData.discountPercentage * productData.price / 100).toFixed()}$ discount</h5>
                        </> 
                        :<></>}
                </div>
                <hr/>
                <div className="mb-4">
                    <div className="d-flex justify-content-around align-items-center mb-5">
                        {productData.stock?<Badge bg="success">{productData.stock} Items In Stock</Badge>
                        :<Badge bg="danger">Out of Stock</Badge>}
                        <p className="m-0 d-flex align-items-center"><strong>Brand:</strong>{productData.brand}</p>
                    </div>
                    <hr/>
                    <StarsBar rating={productData.rating}/>
                </div>
                <button style={{width:"80%"}} type="button" class="btn btn-info " 
                onClick={(e)=>{dispatch(addToCart(productData))}}>
                    ADD TO CART</button>
            </div>
            
        </div>
    </div>) : <></>
}
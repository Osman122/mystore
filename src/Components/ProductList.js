import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { axiosInstance } from "../apis/config"
import ProductCard from "./productCard";


const ProductList = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("", {
        params: {
          name: "test",
        },
      })
      .then((res) => setProductList(res.data.products))
      .catch((err) => console.log(err));

  }, []);

 

  
  

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4" >
      {productList.map((product, index) => {
        return (
          <div 
          style={{height:"600px"}}
          className="col" key={product.id}>
            <ProductCard product={product} key={product.id}/>
            
              
              
              
             
            
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;

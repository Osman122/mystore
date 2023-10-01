import { useNavigate } from "react-router-dom";

export default function ProductCard (props) {
    const navigate = useNavigate()
    const {product} = props
    const showProductDetails = (id) => {
        navigate(`/productDetails/${id}`)
    }

    return(
    
        <div className="card h-100 p-2 sec-border" >
            {product.stock ? <span className="text-bg-success" 
            style={{position:"absolute",top:"20px",left:"20px", borderRadius:"8px",padding:"3px 10px 3px 10px", fontSize:"12px"}} >In Stock{product.stock}</span>
            : <span className="badge text-bg-danger" 
            style={{position:"absolute",top:"20px",left:"20px"}}>Out of Stock</span>}
            <img src={product.thumbnail}style={{height:"300px",objectFit:"cover"}}
             className=" img-fluid" alt="product thumbnail" 
            onClick={() => showProductDetails(product.id)} />
            <div className="card-body rounded mt-1 d-flex flex-column justify-content-between">
                <div>
                    <h5 className="d-inline-block card-title w-75 text-wrap" 
                    onClick={() => showProductDetails(product.id)}>{product.title}</h5>
                    <h5 className="d-inline float-end">${product.price}</h5>
                    <p className="card-text mt-2 text-dark p-1">{product.description}</p>
                </div>
                
                <button type="button" class="btn btn-info">ADD TO CART</button>
                
            </div>
        </div>
    
    )
}

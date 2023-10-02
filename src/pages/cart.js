
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";

export default function Cart () {
    const navigate = useNavigate()

    const cart = useSelector(state => state.cart.items)
    console.log(cart.length)
    return (<div id="cart">
        { Object.keys(cart).length ? 
        <table className='table align-middle text-center'>
              <thead>
                <tr>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Remove</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {Object.values(cart).map((product) => <CartItem product={product} />)}
                <tr>
                    <th className="text-end" colSpan={3}>Total Price:</th>
                    <td>${Object.values(cart).map((product) => product.price * product.count).reduce(((acc,curr)=>acc+curr),0) } 
                    <button type="button" class="btn btn-success mx-3">Buy Now</button></td>
               <br/>
              
             </tr>
             </tbody>
            
        </table>
        
        :<div class="alert alert-secondary d-flex justify-content-between align-items-center" role="alert">
            No Items in your cart!
            <Button onClick={() => navigate('/')}>Shop Now</Button>
        </div>}
    </div>)
}
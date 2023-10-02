import { Button , Badge } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addToCart,removeItemFromCart,deleteAllFromCart} from '../store/slice/cart'

export default function CartItem (props) {
    const { product } = props
    const dispatch = useDispatch()

    const handleClick = (event) => {
        switch (event.target.innerText){
            case "-":
              dispatch(removeItemFromCart(product.id))
              break;
            case "+":
                if (product.count < product.stock){
                    dispatch(addToCart(product))
                } else {
                    alert("Not enough products in stock")
                }
                
                break;
            case "x":
                dispatch(deleteAllFromCart(product.id))
                break;
            default:
                break;
          }
    }
    return <><tr>
            <td><div className="d-flex align-items-center">
                <img className="w-25" src={product.thumbnail} alt="product"></img>
                <div className='ps-5 rounded-3'>
                    <h3 class="card-title pb-2">{product.title}</h3>
                    <p class="card-text text-start">ID: {product.id}</p>
                </div>
            </div></td>
            <td><Button onClick={(event)=>handleClick(event)} variant="outline-secondary">-</Button>
            <Badge className="w-25 h-25 p-2 m-2" bg="light" text="dark">{product.count}</Badge>
            <Button onClick={(event)=>handleClick(event)} variant="outline-info">+</Button></td>
            <td><Button onClick={(event)=>handleClick(event)} variant="outline-danger">x</Button>{''}</td>
            <td>${product.price * product.count}</td>
        </tr></>

}
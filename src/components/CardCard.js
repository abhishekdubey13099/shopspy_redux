import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./CardCard.css";

export const CardCard = ({ product }) => {
    const dispatch = useDispatch();
    const { name, price, image } = product;
    return (
        <div className="cartCard">
            <img src={image} alt={name} />
            <p className="productName">{name}</p>
            <p className="productPrice">₹{price}</p>
            <button onClick={() => dispatch(remove(product))}>Remove</button>
        </div>
    )
}

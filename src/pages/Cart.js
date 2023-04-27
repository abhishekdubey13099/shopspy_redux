import { useSelector } from "react-redux";
import { useTitle } from "../hooks/useTitle";
import { CardCard } from "../components";



export const Cart = () => {
    useTitle("Cart");
    const cartList = useSelector(state => state.cartState.cartList);
    const total = useSelector(state => state.cartState.total);


    return (
        <main>
            <section className="cart">
                <h1>Cart Items : {cartList.length} / ₹{total}</h1>
                {cartList.map((product) => (
                    <CardCard key={product.id} product={product} />
                ))}
            </section>
        </main>
    )
}


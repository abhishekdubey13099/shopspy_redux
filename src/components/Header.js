import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/logo.png";

export const Header = () => {
    const cartList = useSelector(state => state.cartState.cartList)
    return (
        <header>
            <Link to="/" className="logo">
                <img src={Logo} alt="ShopHere Logo" />
                <span>Shopspy</span>
            </Link>

            <nav className="navigation">
                <NavLink to="/" className="link" end>Home</NavLink>
                <NavLink to="/Cart" className="link">Cart</NavLink>
            </nav>
            <Link to="/" className="items">
                <span>Cart: {cartList.length}</span>
            </Link>
        </header>
    )
}

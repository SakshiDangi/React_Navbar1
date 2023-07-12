import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style.css";

function Index() {

    const navRef = useRef();

    const changeIcon = () => {
        navRef.current.classList.toggle("responsive_nav");
    }


    return(
        <header>
            <h3>Project</h3>
            <nav ref={navRef}>
                <ul id="navbar">
                    <li><a id="active" href="/#">Home</a></li>
                    <li><a href="/#">Shop</a></li>
                    <li><a href="/#">Products</a></li>
                    <li><a href="/#">Order</a></li>
                    <li><a href="/#">Contact</a></li> 
                    <button className="btn-bx">Login</button>
                    <button className="btn-bx">SignUp</button> 
                    <button className="btn close-btn" onClick={changeIcon}>
                    <FaTimes />
                    </button>
                </ul> 
            </nav>
            <button className="btn" onClick={changeIcon}>
                <FaBars />
            </button>
        </header>
    )
}

export default Index;
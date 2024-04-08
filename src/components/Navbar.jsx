import { Link } from "react-router-dom";
import image from '../assets/ship.png'

export default function Navbar(){
    return (
        <>
        <nav className="navigation">
        <img src={image}></img>
        <h1>Privateer</h1>
        <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/input">Input</Link>
        </div>
        </nav>
        </>
    )
}
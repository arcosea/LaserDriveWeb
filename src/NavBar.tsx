import {Link} from "react-router-dom"
import { isPropertySignature } from "typescript";

export default function Navbar(){
    return (
        <nav className="nav">
            <Link to="/" className="site-title"> LaserDrive</Link>
            <ul>
                <li>
                    <Link to="/about" className="site-title"> About </Link>
                </li>
                <li>
                    <Link to="/implementation" className="site-title"> Implementation </Link>
                </li>
            </ul>
        </nav>
    )
}
import {Link} from "react-router-dom"
import { isPropertySignature } from "typescript";

export default function Footer(){
    return (
        <nav className="footer">
            <Link to="/" className="site-title"> About </Link>
            <ul>
                <li> 
                    <Link to="/" className="site-title"> Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}
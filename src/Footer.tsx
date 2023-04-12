import {Link} from "react-router-dom"
import { isPropertySignature } from "typescript";
import carLogo from './CarPic_capstone copy.png';
import './style/Footer.css';

export default function Footer(){
    return (
        <footer className="footer">
            <a href="http://localhost:3000">
                <img src={carLogo} alt="LaserDrive Logo"></img>
            </a>
            <ul>
                <li>
                    <Link to="/about" className="site-title"> About </Link>
                </li>
                <li>
                    <Link to="/implementation" className="site-title"> Contact Us </Link>
                </li>
            </ul>
        </footer>
    )
}
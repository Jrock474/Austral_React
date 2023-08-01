import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Header = ({ color }) => {
  useEffect(() => {
    // Update the background color when the color prop changes
    document.querySelector('.shared-header').style.backgroundColor = color;
  }, [color]);
    return(
        <header className="shared-header" style={{backgroundColor:color}}>
        <section className="container-shared-header">
            <a href ="#" className = "toggle-button">
                <span className ="bar"></span>
                <span className ="bar"></span>
                <span className ="bar"></span>
            </a>
            <div className="welcome-text">
                <div className="heading">Austral</div>
                <div className="sub-heading">Multimedia Design</div>
            </div>
            <ul className="nav-area">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to= "/About">ABOUT</Link></li>
                    <li><Link to="/Animations">ANIMATIONS</Link></li>
                    <li><Link to="/Designs">PORTFOLIO</Link></li>
            </ul>
        </section>
        </header> 
    )
}

export default Header;
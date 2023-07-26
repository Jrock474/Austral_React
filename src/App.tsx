import "./styles.css"
import Home from './Home-Page'
import About from "./About"
import { Link, Route, Routes } from "react-router-dom"
import Animations from "./Animations"
import Designs from "./Designs"

const App = () => {
  return (
    <>
   <div className ="site-wrapper">
   <header className="shared-header">
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
    <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "about" element = {<About />} />
        <Route path = "animations" element = {<Animations />} />
        <Route path = "designs" element = {<Designs />} />
    </Routes>
    <footer className="shared-footer">
      <p>
          <a href="jordanw0412@gmail.com">Contact</a>
      </p>    
      <p>
          <img src="./Site_Files/copyright_symbol_3.png"></img>
          All Rights Reserved
      </p>    
    </footer>

   </div>
   </>
   
  )
}

export default App;

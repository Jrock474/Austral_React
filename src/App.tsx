import "./styles.css"
import { Route, Routes } from "react-router-dom"
import Home from './Home'
import About from "./About"
import Animations from "./Animations"
import Designs from "./Designs"
import Header from "./Header"
import Footer from "./Footer"

const App = () => {
  return (
    <>
   <div className ="site-wrapper">
   <Header />
    <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "about" element = {<About />} />
        <Route path = "animations" element = {<Animations />} />
        <Route path = "designs" element = {<Designs />} />
    </Routes>
    <Footer />
   </div>
   </>
   
  )
}

export default App;

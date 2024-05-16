import React from 'react'
import { SiCoffeescript } from "react-icons/si";

const Navbar = () => {
  return (
    <div>
    <div>
    <div>
       <div>
          <div>
            <span>
               <SiCoffeescript/>
            </span>
              <h1>CafePlus</h1>
            </div>
            <nav>
            <link to="home" spy={true} smooth={true} duration={500} className="curser-pointer">Home</link>
            <link to="menu" spy={true} smooth={true} duration={500} className="curser-pointer">Menu</link>
            <link to="about us" spy={true} smooth={true} duration={500} className="curser-pointer">About Us</link>
            <link to="products" spy={true} smooth={true} duration={500} className="curser-pointer">Products</link>
            <link to="reviews" spy={true} smooth={true} duration={500} className="curser-pointer">Reviews</link>
            </nav>

            
        </div>
     </div>
 </div>
    </div>
  )
}

export default Navbar

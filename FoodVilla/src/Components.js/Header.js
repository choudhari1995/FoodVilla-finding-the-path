import { Link } from "react-router-dom";

export const Title = () => {
    return <div className="title"><h2>Food Villa</h2></div>
}

//react element

const Header = () => {
   return(
       <>
       <div className="title"><Title />
       <div className="list-items">
           <ul>
               <Link to={"/"}><li>Home</li></Link>
               <Link to={"/about"}><li>About</li></Link>
               <Link to={"/contact"}><li>Contact</li></Link>
               <li>Cart</li>
           </ul>
       </div>
       </div>
       </>
   )
   //functional component




};

export default Header;
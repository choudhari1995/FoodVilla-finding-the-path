import { Link } from "react-router-dom";
import Logo from "../assets/images/SiteLogo.jpg";
import { useState } from "react";


export const Title = () => {
  return (
    <div className="ml-2.5 w-[70px]">
      <img src={Logo}></img>

    </div>
  );
};


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-white shadow fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center h-[70px] px-4">
          <Title />
          <div className="md:hidden">
            <button className={`text-2xl ${isMenuOpen ? 'absolute  right-3 bottom-7 ml-20 text-sm' : ''}`}onClick={toggleMenu}>
              {isMenuOpen ? '❌' : '🍔'}
            </button>
          </div>
        <ul
          className={`md:flex ${
            isMenuOpen ? 'flex' : 'hidden'
          } space-x-4 font-serif text-base align-middle text-black p-4 mr-4 md:p-0`}
          >
          <li className="text-black hover:bg-yellow-300 p-1 rounded-xl">
            <Link to={'/'} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="text-black hover:bg-yellow-300 p-1 rounded-xl">
            <Link to={'/about'} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="text-black hover:bg-yellow-300 p-1 rounded-xl">
            <Link to={'/contact'} onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li className="text-black hover:bg-yellow-300 p-1">
            <Link to={'/instamart'} onClick={toggleMenu}>
              Instamart
            </Link>
          </li>
          <li className="text-black hover:bg-yellow-300 p-1 rounded-xl">Cart</li>
        </ul>
          </div>
      </div>
    </>
  );
};

export default Header;



//react element

// <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Default</button>

/*<button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Default</button>
<div class="flex justify-between bg-white shadow fixed top-0 left-0 w-full h-[70px] z-50"><a href="/"> <img class="logo ml-2.5 w-[70px]" alt="logo" src="https://learn-react-with-harshi-chapter-12.netlify.app/logo-main.9b031605.png"> </a><div class="flex justify-center items-center"><span class="py-2.5 px-1 mt-2.5 mr-1 font-bold text-green"> Please Login !!!</span></div><div class="flex items-center justify-between"><div class="menu-content-container flex items-center pr-7  false"><ul class="h-full lg:flex xl:flex md:flex items-center pr-5 hidden  false"><li class="p-2.5"><a href="/"><button class="nav--btn">Home</button></a></li><li class="p-2.5"><a href="/about"><button class="nav--btn">About</button></a></li><li class="p-2.5"><a href="/instamart"><button class="nav--btn">Instamart</button></a></li><li class="p-2.5"><a href="/help"><button class="nav--btn">Help</button></a></li><li class="p-2.5"><a href="/cart"> <button class="nav--btn"> Cart <span class="text-orange font-bold pl-1">0</span> </button> </a></li><li class="p-2.5"><button class="nav--btn"> Login  <span class="text-green">●</span></button></li></ul></div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="lg:hidden xl:hidden md:hidden flex w-[65px] text-base text-blue-dark cursor-pointer " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg></div></div>

*/
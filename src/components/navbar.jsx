import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo1 from "../assets/logo1.svg";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };


  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-5 mx-auto relative lg:text-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
          <div className="h-12 w-32 mr-2">
              <img className="h-full w-full" src={logo1} alt="Logo" />
          </div>
          </div>


          <ul className="hidden lg:flex text-white/50 ml-14 space-x-20">
            {navItems.map((item, index) => (
              <li key={index} className="text-center hover:bg-neutral-800 rounded-md hover:text-white py-2 px-4">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 rounded-md">
              Log In
            </a>
            <a href="#" className="py-3 px-5 border rounded-md">
             Get Started Now
            </a>
          </div>


          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>

        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="text-center hover:bg-neutral-700 rounded-md py-2 px-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3  rounded-md">
              Log In
              </a>

              <a href="#" className="py-2 px-3 border rounded-md ">
              Get Started Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
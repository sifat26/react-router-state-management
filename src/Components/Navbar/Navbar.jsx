import { useState } from "react";
import Link from "./Link";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "/dashboard", name: "Dashboard", id: 5 },
  ];
  const [open,setOpen]=useState(false)

  return (
    <nav>
      <div onClick={()=>setOpen(!open)} className="text-3xl  bg-lime-300 p-4  md:hidden">
        {
          open?
          <MdOutlineClose />:
          <CiMenuBurger />
        }
      </div>
      
      <ul className={`md:flex mx-2 duration-1000 absolute md:static rounded-md p-4 shadow-lg
       ${open?`top-16`:`-top-60`
  
    }
    bg-lime-200`
    
    }>
        {routes.map((route) => (
            <Link key={routes.id} route={route}></Link>
          
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

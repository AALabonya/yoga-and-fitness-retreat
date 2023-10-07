import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

    const navLinks=<>

        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/services">Services</NavLink></li>
        <li> <NavLink to="/feature">Features</NavLink></li>
        <li> <NavLink to="classes">Classes</NavLink></li>
        <li> <NavLink to="/shop">Shop</NavLink></li>
    
    </>
    return (
        <div className="flex justify-center">
            <div className="flex-1 max-w-7xl flex justify-center">
           <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn bg-green-300 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-300 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link className="bg-transparent"><img src="https://i.ibb.co/1qVZJpB/logo1.webp" alt="" className="w-20" /></Link>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg font-bold">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn font-bold bg- bg-green-700 text-white px-5">Login</a>
  </div>
</div> 
        </div>
        </div>
    );
};

export default NavBar;
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/AuthProvider";


const NavBar = () => {
  const {user, logOut} =useContext(AuthContext)
   
  const handleSignOut =()=>{
        logOut()
        .then()
        .catch(error=>console.log(error))
  }

  const navLinks = <>

    <li className="bg-green-200 text-black rounded-lg"> <NavLink to="/">Home</NavLink></li>
    <li className="bg-green-200 text-black rounded-lg"> <NavLink to="/services">Services</NavLink></li>
    <li className="bg-green-200 text-black rounded-lg"> <NavLink to="/specialist">Specialist</NavLink></li>
    <li className="bg-green-200 text-black rounded-lg"> <NavLink to="/shop">Shop</NavLink></li>
    <li className="bg-green-200 text-black rounded-lg"> <NavLink to="/register">Registration</NavLink></li>

  </>
  return (
    <div className="lg:fixed lg:top-0 lg:w-full lg:bg-white lg:z-20 md:fixed md:top-0 md:w-full md:bg-white md:z-20">
      <div className="max-w-7xl flex mx-auto px-3">
        <div className="navbar bg-base-100 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn px-1 py-1 bg-green-600 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="dropdown-content lg:mt-3 z-[100] lg:p-2 shadow bg-green-500 rounded-box">
                {navLinks}
              </ul>
            </div>
            <Link className="bg-transparent"><img src="https://i.ibb.co/1qVZJpB/logo1.webp" alt="" className=" w-14 lg:w-20 md:w-20" /></Link>

          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 lg:gap-2 lg:text-lg font-bold">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            {
              user ? <>
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <div >
                  <button onClick={handleSignOut} className="btn bg-green-500 font-bold flex ">
                    <span>{user.displayName}</span><br/>
                    <span>LogOut</span> 

                  </button>
                </div>
              </>

                :
                <Link to="/login" className="btn font-bold bg- bg-green-700 text-white">Login</Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

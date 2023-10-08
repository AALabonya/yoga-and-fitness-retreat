import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/AuthProvider";


const NavBar = () => {
  const{logOut, user}= useContext(AuthContext)

      const handleSignOut=()=>{
        logOut()
        .then(result=>{
          console.log(result.user);
        })
        .catch(error=>console.error(error))
      }


    const navLinks=<>

        <li className="bg-green-200 text-black rounded-lg"> <NavLink to="/">Home</NavLink></li>
        <li className="bg-green-200 text-black rounded-lg"> <NavLink to="/services">Services</NavLink></li>
        <li className="bg-green-200 text-black rounded-lg"> <NavLink to="/specialist">Specialist</NavLink></li>
        <li className="bg-green-200 text-black rounded-lg"> <NavLink to="/shop">Shop</NavLink></li>
        <li className="bg-green-200 text-black rounded-lg"> <NavLink to="/register">Registration</NavLink></li>
    
    </>
    return (
        <div className="lg:fixed lg:top-0 lg:w-full lg:bg-white lg:z-20">
            <div className=" max-w-7xl flex mx-auto px-3">
           <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn bg-green-600 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-500 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link className="bg-transparent"><img src="https://i.ibb.co/1qVZJpB/logo1.webp" alt="" className="w-20" /></Link>
    
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2 text-lg font-bold">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?<>
      <div className="avatar">
  <div className="w-14 rounded-full">
    <img src={user.photoURL} />
    </div>
</div>
      <div>
      <button onClick={handleSignOut} className="btn bg-green-500 font-bold ml-1 flex-1"><p>{user.displayName}</p> LogOut
      </button>
      </div>
      </>
       
      :
      <Link to="/login" className="btn font-bold bg- bg-green-700 text-white px-5">Login</Link>
    }
  </div>
</div> 
        </div>
        </div>
    );
};

export default NavBar;

{/* <nav class="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
  <div class="flex items-center text-gray-900">
    <a
      href="#"
      class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
    >
      Material Tailwind
    </a>
    <ul class="ml-auto mr-8 hidden items-center gap-6 lg:flex">
      <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
        <a class="flex items-center" href="#">
          Pages
        </a>
      </li>
      <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
        <a class="flex items-center" href="#">
          Account
        </a>
      </li>
      <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
        <a class="flex items-center" href="#">
          Blocks
        </a>
      </li>
      <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
        <a class="flex items-center" href="#">
          Docs
        </a>
      </li>
    </ul>
    <button
      class="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
      type="button"
      data-ripple-light="true"
    >
      <span>Buy Now</span>
    </button>
    <button
      class="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      data-collapse-target="sticky-navar"
    >
      <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </span>
    </button>
  </div>
  <div
    class="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
    data-collapse="sticky-navar"
  >
    <ul class="mt-2 mb-4 flex flex-col gap-2 pb-2">
      <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
        <a class="flex items-center" href="#">
          Pages
        </a>
      </li>
      <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
        <a class="flex items-center" href="#">
          Account
        </a>
      </li>
      <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
        <a class="flex items-center" href="#">
          Blocks
        </a>
      </li>
      <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
        <a class="flex items-center" href="#">
          Docs
        </a>
      </li>
      <button
        class="mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        <span>Buy Now</span>
      </button>
    </ul>
  </div>
</nav>
<div class="mx-auto max-w-screen-md py-12">
  <div class="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <img
      alt="nature"
      class="h-[32rem] w-full object-cover object-center"
      src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80"
    />
  </div>
  <h2 class="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
    What is Material Tailwind
  </h2>
  <p class="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
    Can you help me out? you will get a lot of free exposure doing this can my
    website be in english?. There is too much white space do less with more,
    so that will be a conversation piece can you rework to make the pizza look
    more delicious other agencies charge much lesser can you make the blue
    bluer?. I think we need to start from scratch can my website be in
    english?, yet make it sexy i'll pay you in a week we don't need to pay
    upfront i hope you understand can you make it stand out more?. Make the
    font bigger can you help me out? you will get a lot of free exposure doing
    this that's going to be a chunk of change other agencies charge much
    lesser. Are you busy this weekend? I have a new project with a tight
    deadline that's going to be a chunk of change. There are more projects
    lined up charge extra the next time.
  </p>
</div> */}
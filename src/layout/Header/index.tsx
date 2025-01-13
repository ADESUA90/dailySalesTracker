import { Link } from "react-router-dom";
const Header = () => {
  return (

    <>
      <div className="header flex justify-between items-center text-black font-bold text-black mt-0">
        <div className="block items-center P-1">
          <h1 className="font-bold text-3xl fontstyle-header text-black"><Link to="/"><span>D</span></Link></h1>
          <h1 className="font-bold text-3xl fontstyle-header text-yellow-500"><Link to="/"><span>A</span></Link></h1>
          <h1 className="font-bold text-3xl fontstyle-header text-purple-500"><Link to="/"><span>I</span></Link></h1>
          <h1 className="font-bold text-3xl fontstyle-header text-blue-500"><Link to="/"><span>L</span></Link></h1>
          <h1 className="font-bold text-3xl fontstyle-header text-purple-500"><Link to="/"><span>Y</span></Link></h1>
          <h1 className="font-bold text-3xl fontstyle-header text-black"><Link to="/"><span>S</span></Link></h1>
          <h1 className="font-bold text-3xl fontstyle-header text-red-500"><Link to="/"><span>A</span></Link></h1>
          <h1 className="font-bold text-3xl fontstyle-header text-blue-500"><Link to="/"><span>L</span></Link></h1>
          <h1 className="font-bold text-3xl fontstyle-header text-green-500"><Link to="/"><span>E</span></Link></h1>
          <h1 className="font-bold text-3xl fontstyle-header text-black"><Link to="/">S<span></span></Link></h1>
          <div className="flex items-center justify-center ml-10">
            
            <h1 className="font-bold text-3xl fontstyle-header text-white ml-5"><Link to="/"><span>TRACKER</span></Link></h1>
          </div>
        </div>
        <nav>
          <ul className="block gap-4 font-bold text-lg ">
            <li className="mt-10 hover:text-yellow-500"><Link to="logInForm/salesLogin">Login</Link></li>
            {/* <li  className="mt-10 hover:text-red-500 "><Link to ="/salesForm">Sales Form</Link></li> */}
            <li className="mt-10 hover:text-purple-500"><Link to="/salesList">Sales History</Link></li>
            <li className="mt-10 hover:text-blue-500"><Link to="/salesChart">Sales Chart</Link></li>

          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header;
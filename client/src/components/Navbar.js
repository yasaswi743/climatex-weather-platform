import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-6 bg-black text-white">
      
      <h1 className="text-3xl font-bold">
        ClimateX
      </h1>

      <div className="flex gap-8 text-lg items-center">
        
        <Link to="/">
          Home
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/signup">
          Signup
        </Link>

        <Link
          to="/dashboard"
          className="bg-blue-500 px-5 py-2 rounded-xl hover:bg-blue-600"
        >
          Dashboard
        </Link>

      </div>
    </div>
  );
}

export default Navbar;
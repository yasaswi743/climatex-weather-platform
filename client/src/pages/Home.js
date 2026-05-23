import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 text-white">
      
      <Navbar />

      <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-20">
        
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold leading-tight">
            Modern Weather
            <br />
            Forecast Platform
          </h1>

          <p className="mt-8 text-xl text-gray-200 leading-9">
            Track real-time weather updates,
            forecasts, humidity, wind speed,
            air quality, and climate analytics
            with a beautiful modern dashboard.
          </p>

          <div className="mt-10 flex gap-5">
            <Link
              to="/dashboard"
              className="mt-10 bg-white text-blue-600 px-8 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition inline-block"
            >
              Explore Now
            </Link>

            <button
              onClick={() =>
                navigate("/dashboard")
              }
              className="bg-white text-blue-700 px-6 py-3 rounded-2xl"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="mt-16 lg:mt-0 bg-white/20 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[350px]">
          
          <h2 className="text-3xl font-bold">
            Vijayawada
          </h2>

          <div className="mt-6 flex items-center justify-between">
            <h1 className="text-7xl font-bold">
              29°
            </h1>

            <img
              src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
              alt="weather"
              className="w-24"
            />
          </div>

          <p className="text-2xl mt-4">
            Sunny Weather
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">
            
            <div className="bg-white/20 p-5 rounded-2xl">
              <p className="text-lg">
                Humidity
              </p>

              <h3 className="text-3xl font-bold mt-2">
                70%
              </h3>
            </div>

            <div className="bg-white/20 p-5 rounded-2xl">
              <p className="text-lg">
                Wind
              </p>

              <h3 className="text-3xl font-bold mt-2">
                12 km/h
              </h3>
            </div>

            <div className="bg-white/20 p-5 rounded-2xl">
              <p className="text-lg">
                AQI
              </p>

              <h3 className="text-3xl font-bold mt-2">
                82
              </h3>
            </div>

            <div className="bg-white/20 p-5 rounded-2xl">
              <p className="text-lg">
                UV Index
              </p>

              <h3 className="text-3xl font-bold mt-2">
                6
              </h3>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
import { useState } from "react";

import axios from "axios";

import { useNavigate }
from "react-router-dom";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const navigate =
    useNavigate();

  const loginUser =
    async () => {

      try {

        const res =
          await axios.post(
            "http://localhost:5000/api/auth/login",
            {
              email,
              password,
            }
          );

        localStorage.setItem(
          "token",
          res.data.token
        );

        navigate(
          "/dashboard"
        );

      } catch (err) {

        alert(
          "Login Failed"
        );
      }
    };

  return (

    <div className="min-h-screen flex justify-center items-center bg-cyan-700">

      <div className="bg-white p-10 rounded-3xl w-[400px]">

        <h1 className="text-4xl font-bold mb-8">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="w-full p-4 border rounded-2xl mb-5"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="w-full p-4 border rounded-2xl mb-5"
        />

        <button
          onClick={loginUser}
          className="w-full bg-cyan-600 text-white p-4 rounded-2xl"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;
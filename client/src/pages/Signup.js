import { useState } from "react";

import axios from "axios";

import { useNavigate }
from "react-router-dom";

function Signup() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const navigate =
    useNavigate();

  const signupUser =
    async () => {

      try {

        await axios.post(
          "http://localhost:5000/api/auth/signup",
          {
            name,
            email,
            password,
          }
        );

        alert(
          "Signup Success"
        );

        navigate("/login");

      } catch (err) {

        alert(
          "Signup Failed"
        );
      }
    };

  return (

    <div className="min-h-screen flex justify-center items-center bg-blue-900">

      <div className="bg-white p-10 rounded-3xl w-[400px]">

        <h1 className="text-4xl font-bold mb-8">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="w-full p-4 border rounded-2xl mb-5"
        />

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
          onClick={signupUser}
          className="w-full bg-blue-600 text-white p-4 rounded-2xl"
        >
          Signup
        </button>

      </div>

    </div>
  );
}

export default Signup;
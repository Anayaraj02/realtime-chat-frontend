import { useState } from "react";
import { loginUser } from '../authAPI';
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const handelLogin = async () => {
    try {
      const data = await loginUser({ email, password });
      console.log('Login successful:', data);
      navigate("/chat")
      console.log("yes");
    } catch (err) {
      console.log(err, "err in login");
    }
  }
  return (

    <div className="bg-white shadow-xl rounded-xl px-10 py-12 w-full max-w-md">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        🗨️ Chatify
      </h1>

      <p className="text-center text-gray-500 mb-8">
        Welcome back! Login to continue chatting 🚀
      </p>

      <div className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition"
               onClick={handelLogin}
        >
          Login
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Don't have an account?{" "}
        <a href="/register" className="text-purple-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>

  );
}

export default Login;

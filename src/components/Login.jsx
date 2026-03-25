import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "1234") {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white relative">

      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full top-10 left-10 glow"></div>
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 right-10 glow"></div>

      {/* Login Card */}
      <div className="bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-80 z-10">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login 🔐
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter email"
          className="w-full mb-4 p-3 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter password"
          className="w-full mb-4 p-3 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 py-3 rounded-lg font-semibold 
          hover:bg-blue-600 transition duration-300 shadow-lg shadow-blue-500/40"
        >
          Login →
        </button>

        {/* Hint */}
        <p className="text-sm text-gray-400 mt-4 text-center">
          Use: admin@gmail.com / 1234
        </p>

      </div>
    </div>
  );
};

export default Login;
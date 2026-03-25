import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">

      {/* Glow Effect */}
      <div className="absolute w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full top-10"></div>

      {/* Content */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Cyber Threat Intelligence Dashboard 🚀
      </h1>

      <p className="text-gray-300 mb-6 text-center max-w-lg">
        Monitor real-time cyber threats, analyze risks, and protect systems with intelligent insights.
      </p>

      <button
        onClick={() => navigate("/login")}
        className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
      >
        Go to Login
      </button>

    </div>
  );
};

export default Home;
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
    bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">

      {/* Glow Effect */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Content */}
      <div className="text-center z-10">

        <h1 className="text-5xl font-extrabold mb-4">
          Cyber Threat Intelligence Dashboard 🚀
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Monitor real-time cyber threats and security insights
        </p>

        {/* Button */}
        <a
          href="/login"
          className="bg-blue-500 px-8 py-3 rounded-lg text-lg font-semibold 
          hover:bg-blue-600 transition duration-300 shadow-lg shadow-blue-500/50"
        >
          Go to Login →
        </a>

      </div>
    </div>
  );
};

export default Home;
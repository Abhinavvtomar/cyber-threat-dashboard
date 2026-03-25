import { useEffect, useState } from "react";
import { fetchThreatData } from "../services/ThreatService";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Dashboard = () => {
  const [threats, setThreats] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Load Data Function
  const loadData = async () => {
    try {
      setLoading(true);
      const data = await fetchThreatData();
      setThreats(data || []);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Initial Load
  useEffect(() => {
    loadData();
  }, []);

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  // ✅ Stats Logic
  const highCount = threats.filter(t => t.risk === "High").length;
  const mediumCount = threats.filter(t => t.risk === "Medium").length;
  const lowCount = threats.filter(t => t.risk === "Low").length;
  const totalCount = threats.length;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">

      {/* NAVBAR */}
      <div className="bg-gray-800 p-4 rounded mb-6 flex justify-between items-center">
        <span className="font-bold text-lg">CyberSec Dashboard</span>
        <span className="text-sm text-gray-300">Welcome, Admin</span>
      </div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Cyber Threat Dashboard 📊
        </h1>

        <div>
          <button
            onClick={loadData}
            className="bg-blue-500 px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Refresh 🔄
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-blue-400 mb-4">Fetching latest threats...</p>
      )}

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-red-500/20 border border-red-500 p-4 rounded-xl">
          <p className="text-red-400">High Risk</p>
          <h2 className="text-2xl font-bold">{highCount}</h2>
        </div>

        <div className="bg-yellow-500/20 border border-yellow-500 p-4 rounded-xl">
          <p className="text-yellow-400">Medium Risk</p>
          <h2 className="text-2xl font-bold">{mediumCount}</h2>
        </div>

        <div className="bg-green-500/20 border border-green-500 p-4 rounded-xl">
          <p className="text-green-400">Low Risk</p>
          <h2 className="text-2xl font-bold">{lowCount}</h2>
        </div>

        <div className="bg-blue-500/20 border border-blue-500 p-4 rounded-xl">
          <p className="text-blue-400">Total Threats</p>
          <h2 className="text-2xl font-bold">{totalCount}</h2>
        </div>

      </div>

      {/* CHART */}
      <div className="bg-gray-800 p-5 rounded-xl mb-6">
        <h2 className="text-xl mb-4">Threat Overview</h2>

        <BarChart width={500} height={250} data={threats}>
          <XAxis dataKey="ip" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="riskScore" fill="#3b82f6" />
        </BarChart>
      </div>

      {/* TABLE */}
      <div className="bg-gray-800 p-5 rounded-xl">
        <h2 className="text-xl mb-4">Live Threat Feed</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="py-2">IP Address</th>
              <th>Location</th>
              <th>Risk Level</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {threats.map((item, index) => (
              <tr key={index} className="border-b border-gray-700">
                
                <td className="py-2">{item.ip}</td>

                <td>{item.city}</td>

                <td
                  className={
                    item.risk === "High"
                      ? "text-red-400"
                      : item.risk === "Medium"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }
                >
                  {item.risk}
                </td>

                <td>Active</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
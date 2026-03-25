import axios from "axios";

export const fetchThreatData = async () => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");

    return [
      {
        ip: response.data.ip,
        city: "Your Network",
        risk: "High",
        riskScore: 90,
      },
      {
        ip: "45.33.32.156",
        city: "USA",
        risk: "Medium",
        riskScore: 60,
      },
      {
        ip: "103.21.244.0",
        city: "India",
        risk: "High",
        riskScore: 85,
      },
      {
        ip: "192.168.1.1",
        city: "Local",
        risk: "Low",
        riskScore: 20,
      },
    ];
  } catch (error) {
    console.error(error);
    return [];
  }
};
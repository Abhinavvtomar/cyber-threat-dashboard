import { HashRouter as Router } from "react-router-dom";import Home from "./pages/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = localStorage.getItem("auth");
  return isAuth ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>      </Routes>
    </BrowserRouter>
  );
}

export default App;
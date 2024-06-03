import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import axios from "axios";
import { useEffect, useState } from "react";
import checkSession from "./auth/authService";
import LiveData from "./Pages/LiveData";
import HistoryData from "./Pages/HistoryData";
import Feedback from "./Pages/Feedback";
import Alerts from "./Pages/Alerts";

function App() {
  axios.defaults.withCredentials = true;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

  //for checking session 
  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const isAuthenticated = await checkSession();
        setIsAuthenticated(isAuthenticated);

      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Set loading to false after authentication check
      }

    };

    if (!isAuthenticated) {
      authenticateUser(); // Check session only if user is not authenticated
    } else {
      setLoading(false); // Set loading to false immediately if user is authenticated
    }

  }, [isAuthenticated]);

  // Render routes only after loading is false and isAuthenticated is determined
  if (loading) {
    return <h3 style={{ textAlign: "center" }} >Loading...</h3>;
  }
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/liveData" element={isAuthenticated ? <LiveData /> : <Navigate to="/" />} />
          <Route path="/historyData" element={isAuthenticated ? <HistoryData /> : <Navigate to="/" />} />
          <Route path="/alerts" element={isAuthenticated ? <Alerts /> : <Navigate to="/" />} />
          <Route path="/feedback" element={isAuthenticated ? <Feedback /> : <Navigate to="/" />} />
          <Route
            path="*"
            element={<div className="text-center">Page Not Found</div>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

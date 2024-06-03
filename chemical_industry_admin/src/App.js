import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Users from "./Pages/Users";

import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import TempratureSensor from "./Pages/TempratureSensor";
import SmokeSensor from "./Pages/SmokeSensor";
import MQ135Sensor from "./Pages/MQ135Sensor";
import FireSensor from "./Pages/FireSensor";
import MQ3Sensor from "./Pages/MQ3Sensor";
import MQToxicGasSensor from "./Pages/MQToxicGasSensor";
import DeviceLocation from "./Pages/DeviceLocation";
import AlertsData from "./Pages/AlertsData";
import Complaints from "./Pages/Complaints";
import Feedbacks from "./Pages/Feedbacks";
import Home from "./Pages/home/Home";
import { useEffect, useState } from "react";
import checkSession from "./auth/authServices";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

  //for checking session
  useEffect(() => {
    const authenticateUser = async () => {
      // Call checkSession to determine if user is authenticated
      // const isAuthenticated = await checkSession();
      // setIsAuthenticated(isAuthenticated);
      // setLoading(false); // Set loading to false after checking session
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

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signin.html"
            element={!isAuthenticated ? <SignIn /> : <Navigate to="/" />}
          />
          <Route
            path="/signup.html"
            element={!isAuthenticated ? <SignUp /> : <Navigate to="/" />}
          />

          <Route
            path="/"
            element={
              isAuthenticated ? <Home /> : <Navigate to="/signin.html" />
            }
          />
          <Route
            path="/users.html"
            element={
              isAuthenticated ? <Users /> : <Navigate to="/signin.html" />
            }
          />
          <Route
            path="/temprature.html"
            element={
              isAuthenticated ? (
                <TempratureSensor />
              ) : (
                <Navigate to="/signin.html" />
              )
            }
          />
          <Route
            path="/smoke.html"
            element={
              isAuthenticated ? <SmokeSensor /> : <Navigate to="/signin.html" />
            }
          />
          <Route
            path="/mq135.html"
            element={
              isAuthenticated ? <MQ135Sensor /> : <Navigate to="/signin.html" />
            }
          />
          <Route
            path="/mq3.html"
            element={
              isAuthenticated ? <MQ3Sensor /> : <Navigate to="/signin.html" />
            }
          />
          <Route
            path="/fire.html"
            element={
              isAuthenticated ? <FireSensor /> : <Navigate to="/signin.html" />
            }
          />
          <Route
            path="/mqToxicGas.html"
            element={
              isAuthenticated ? (
                <MQToxicGasSensor />
              ) : (
                <Navigate to="/signin.html" />
              )
            }
          />
          <Route
            path="/deviceLocation.html"
            element={
              isAuthenticated ? (
                <DeviceLocation />
              ) : (
                <Navigate to="/signin.html" />
              )
            }
          />
          <Route
            path="/alertData.html"
            element={
              isAuthenticated ? <AlertsData /> : <Navigate to="/signin.html" />
            }
          />
          <Route
            path="/complainsData.html"
            element={
              isAuthenticated ? <Complaints /> : <Navigate to="/signin.html" />
            }
          />
          <Route
            path="/feedbackData.html"
            element={
              isAuthenticated ? <Feedbacks /> : <Navigate to="/signin.html" />
            }
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

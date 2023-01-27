import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { replaceMail } from "./store/mail-actions";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const firstTime = useSelector((state) => state.mail.firstTime);
  const dispatch = useDispatch();

  if (isLoggedIn && firstTime) {
    const loggedUserEmail = JSON.parse(localStorage.getItem("idToken")).email;
    const emailUrl = loggedUserEmail.replace("@", "").replace(".", "");
    dispatch(replaceMail(emailUrl, loggedUserEmail));
  }
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          exact
          element={
            isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;

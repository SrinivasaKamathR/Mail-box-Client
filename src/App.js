import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;

import React from "react";
import Header from "../../components/Header/Header";
import { outlet } from "react-router-dom";
const Home = () => {
  return (
    <main>
      <Header />
      <outlet />
    </main>
  );
};

export default Home;

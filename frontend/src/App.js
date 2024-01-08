import "./App.css";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Webfont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.jsx";
import ProductDetails from "./component/Product/ProductDetails"



function App() {
  React.useEffect(() => {
    Webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/product/:id" Component={ProductDetails} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

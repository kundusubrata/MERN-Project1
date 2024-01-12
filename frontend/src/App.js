import "./App.css";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Webfont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.jsx";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search.jsx";
import LoginSignUp from "./component/User/LoginSignUp.jsx";
import store from "./store.js";
import { loadUser } from "./actions/userAction.jsx";
import UserOptions from "./component/layout/Header/UserOptions.jsx";
import { useSelector,useDispatch } from "react-redux";
import Profile from "./component/User/Profile.jsx";
import ProtectedRoute from "./component/Route/ProtectedRoute.jsx";


function App() {
  const {isAuthenticated,user} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    Webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Header />
        {isAuthenticated && <UserOptions user={user}/>}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products/" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search/" element={<Search />} />
        <ProtectedRoute exact path="/account" element={Profile} />
        <Route exact path="/login" element={<LoginSignUp />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

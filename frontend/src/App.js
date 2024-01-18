import "./App.css";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import { React, useEffect, useState } from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store.js";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import OrderDetails from "./component/Order/OrderDetails";
import MyOrder from "./component/Order/MyOrder";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, [dispatch]);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products/" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/products/product/:id" element={<ProductDetails />} />
        <Route exact path="/search/" element={<Search />} />

        <Route
          exact
          path="/account"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route
          exact
          path="/me/update"
          element={<ProtectedRoute element={<UpdateProfile />} />}
        />
        <Route
          exact
          path="/password/update"
          element={<ProtectedRoute element={<UpdatePassword />} />}
        />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />

        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/login/shipping"
          element={<ProtectedRoute element={<Shipping />} />}
        />

        {/* {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Route
              exact
              path="/process/payment"
              element={<ProtectedRoute element={<Payment />} />}
            />
          </Elements>
        )} */}
        <Route
          path="/process/payment"
          element={
            stripeApiKey ? (
              <Elements stripe={loadStripe(stripeApiKey)}>
                <ProtectedRoute element={<Payment />} />
              </Elements>
            ) : null
          }
        />
        <Route
          exact
          path="/success"
          element={<ProtectedRoute element={<OrderSuccess />} />}
        />
        <Route
          exact
          path="/orders"
          element={<ProtectedRoute element={<MyOrder />} />}
        />
        <Route
          exact
          path="/order/confirm"
          element={<ProtectedRoute element={<ConfirmOrder />} />}
        />
        <Route
          exact
          path="/order:id"
          element={<ProtectedRoute element={<OrderDetails />} />}
        />
        <Route
          exact
          path="/admin/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          exact
          path="/admin/products"
          element={<ProtectedRoute element={<ProductList />} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

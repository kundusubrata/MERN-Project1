import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

// const product = {
//   name: "Blue Shirt",
//   images: [
//     {
//       url: "https://png.pngtree.com/png-clipart/20220729/original/pngtree-formal-mens-ultra-marine-blue-shirt-with-black-pant-free-png-png-image_8422710.png",
//     },
//   ],
//   price: "₹3000",
//   _id: "Krishna",
// };

const Home = () => {
  
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"ECOMMERCE"} />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {/* <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />

        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} /> */}

            {products &&
              products.map((product) => <ProductCard key={product._id} product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);


  return (
    <Fragment>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {product &&
              product.images &&
              product.images.map((item, i) => (
                <img
                  className="CarouselImage"
                  key={item.url}
                  src={item.url}
                  alt={`${i} Slide`}
                />
              ))}
          </Carousel>
        </div>
        
      </div>
    </Fragment>
  );
};

export default ProductDetails;

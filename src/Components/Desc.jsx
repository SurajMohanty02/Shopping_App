import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BiMinus } from "react-icons/bi";
import "./Desc.css";
import db from "./firebase";
const Desc = () => {
  const [count, setcount] = useState(1);
  const { id } = useParams();

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    dispatch({
      type: "PRODUCT",
      id,
    });
  }, [id]);
  const increment = (quantity) => {
    if (count < quantity) {
      setcount(count + 1);
    }
  };
  const decrement = () => {
    if (count >= 2) {
      setcount(count - 1);
    }
  };
  const sendcount = (id) => {
    dispatch({
      type: "COUNT",
      count,
      id,
    });
  };
  return (
    <React.Fragment>
      <div className="details">
        <div className="details__container">
          <div className="details__image">
            <img src={product.image} alt="" />
          </div>
          <div className="details__text">
            <h2>{product.name}</h2>
            <span id="black">Price:</span>
            <span> {`₹ ${product.discountedprice}.00`}</span>
            <p> Inclusive of all taxes</p>
            <div className="fit">
              <span>Fit:</span>
              <p> True to size. Order usual size. </p>
            </div>
            <div className="quantity">
              <span
                className="plus"
                onClick={() => increment(product.quantity)}
              >
                <BsPlus />
              </span>
              <span className="quanty">{count}</span>
              <span className="minus" onClick={decrement}>
                <BiMinus />
              </span>
            </div>

            <button className="button" onClick={() => sendcount(product.id)}>
              ADD TO CART
            </button>

            <div className="details__desc">
              <span>Description:-</span>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Desc;

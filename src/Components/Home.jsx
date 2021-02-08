import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Router } from "react-router-dom";
import banner from "./banner.jpg";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { products } = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();
  function truncate(source, size) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
  }

  return (
    <div className="home">
      <div className="banner">
        <img src={banner} alt="" />
      </div>

      <div className="container">
        {products.map((info) => (
          <div className="col-3" key={info.id}>
            <div className="product">
              <Link to={`/desc/${info.id}`}>
                <div className="product__image">
                  <img src={info.image} alt="" />
                </div>
              </Link>

              <div className="product__description">
                <h2> {truncate(`${info.name}`, 30)}</h2>
                <div className="product___price">
                  <h3>{`₹${info.discountedprice}`}</h3>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray",
                    }}
                  >
                    {`
               ₹${info.price}`}
                  </span>
                  <h2>{`(Save ${info.discount}%)`}</h2>
                </div>
                <h4 style={{ color: "gray " }}>{info.freedelivery}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

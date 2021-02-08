import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";
import { BsFillBagFill } from "react-icons/bs";
import { IconButton } from "@material-ui/core";
import Home from "./Home";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => state.ProductReducer);

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" className="header__left">
          <img src={logo} alt="" />
        </Link>

        <div className="header__right">
          <div className="basket">
            <Link to="/cart">
              <BsFillBagFill color="orange" className="cart" />
            </Link>
            {count.nocount ? <span>{count.nocount}</span> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

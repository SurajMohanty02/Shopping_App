import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import db from "./firebase";
const Cart = () => {
  const count = useSelector((state) => state.ProductReducer);
  console.log(count);
  const [data, setdata] = useState([]);
  useEffect(() => {
    if (count.count != "") {
      db.collection("list").add({
        productname: count.count.name,
        image: count.count.image,
        id: count.count.id,
        price: count.count.discountedprice,
        quantity: count.nocount,
        description: count.count.description,
        freedelivery: count.count.freedelivery,
        discount: count.count.discount,
      });
    }
  }, []);
  useEffect(() => {
    db.collection("list").onSnapshot((snapshot) => {
      setdata(snapshot.docs.map((info) => info.data()));
    });

    console.log(data);
  }, []);

  return (
    <section>
      {data
        ? data.map((data) => (
            <div className="cart" key={data.id}>
              <div className="cart__container">
                <div className="cart__image">
                  <img src={data.image} alt="" />
                </div>
                <div className="cart__description">
                  <div className="price">
                    <h2>{data.productname}</h2>
                    <span>{`₹ ${data.price}`}</span>
                  </div>
                  <div className="qty">
                    <h2>Qty: &nbsp; </h2>
                    <span>{data.quantity}</span>
                  </div>
                  <p className="free">{data.freedelivery}</p>
                  <div className="total">
                    <p>Total:</p>
                    <h4>{`${data.price} ( discount:-${data.discount}% ) `}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))
        : ""}
    </section>
  );
};

export default Cart;

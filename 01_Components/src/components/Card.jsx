import React from "react";
import crazyCombo from "../assets/crazy combo.jpg";

const Card = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="card shadow" style={{ width: "20rem" }}>
        
        <img
          src={crazyCombo}
          className="card-img-top"
          alt="Shirt and Jeans Combo"
        />

        <div className="card-body">
          <h4 className="card-title">Crazy Shirt & Jeans Combo</h4>

          <p className="card-text">
            Upgrade your style with this premium casual combo featuring a
            trendy cotton shirt and slim-fit denim jeans. Perfect for parties,
            outings, college, and casual wear.
          </p>

          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              👕 Shirt: Premium Cotton Fabric
            </li>

            <li className="list-group-item">
              👖 Jeans: Slim Fit Stretch Denim
            </li>

            <li className="list-group-item">
              🎨 Color: Black Shirt + Blue Jeans
            </li>

            <li className="list-group-item">
              📏 Sizes: S, M, L, XL
            </li>

            <li className="list-group-item">
              ⭐ Rating: 4.5 / 5
            </li>
          </ul>

          <h5 className="text-success mb-3">₹1,499</h5>

          <a href="/" className="btn btn-primary w-100">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
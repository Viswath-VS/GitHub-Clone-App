import React from "react";
import "./repository.scss";
import DashBoard from "../../layouts/dashboard/dashboard";

const Repository = () => {
  return (
    <DashBoard>
      <div className="repository-container">
        <div className="repository-elements">
          <h3>ecommerce-microservive</h3>
          <h5>e-commerce backend using microservice architecture</h5>
          <div className="elements">
            <p>javasript</p>
            <p>updated 14 days ago</p>
          </div>
        </div>
        <div className="repository-elements">
          <h3>ecommerce-microservive</h3>
          <h5>e-commerce backend using microservice architecture</h5>
          <div className="elements">
            <p>javasript</p>
            <p>updated 14 days ago</p>
          </div>
        </div>
      </div>
    </DashBoard>
  );
};
export default Repository;

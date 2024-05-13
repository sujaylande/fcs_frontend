import React from "react";
import OrderCard from "../components/OrderCard";
import OrderDeliverCard from "../components/OrderDeliverCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row px-10 pt-4 gap-10 justify-between ">
        <div className="flex flex-row gap-10 justify-center">
          <OrderCard type="newOrder" />
          <OrderCard type="readyOrder" />
          <OrderCard type="deliverOrder" />
        </div>
        <div className="flex items-start gap-10">
          <OrderDeliverCard type="pendingQueue" title="Pending" />
          <OrderDeliverCard type="readyQueue" title="Ready" />
          <OrderDeliverCard type="delivered" title="Delivered" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;

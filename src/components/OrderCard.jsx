import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../util";
import axios from "axios";
import { useMyContext } from "../Context/MyContext";

const OrderCard = ({ type }) => {
  const [token, setToken] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const { myVariable, setMyVariable } = useMyContext();
  const handleInputChange = (e) => {
    setToken(e.target.value);
  };

  const createNewOrder = async () => {
    try {
      const response = await axios.post(BASE_URL + "api/v1/createorder", {
        token,
      });
      setToken("");
      setMyVariable("n");
      setStatusMessage(response.data.message);
    } catch (error) {
      setStatusMessage(error.data.message);
    }
  };

  const createReadyOrder = async () => {
    try {
      const response = await axios.post(BASE_URL + "api/v1/orderready", {
        token,
      });
      setToken("");
      setMyVariable("r");
      setStatusMessage(response.data.message);
    } catch (error) {
      setStatusMessage(error.data.message);
    }
  };

  const orderDeliver = async () => {
    try {
      const response = await axios.post(BASE_URL + "api/v1/orderdelivered", {
        token,
      });
      setToken("");
      setMyVariable("d");
  
      setStatusMessage(response.data.message);
    } catch (error) {
      setStatusMessage(error.data.message);
    }
  };

  let cardBorderColor, buttonColor;
  switch (type) {
    case "deliverOrder":
      cardBorderColor = "border border-green-600";
      buttonColor =
        "bg-green-600 hover:bg-transparent hover:text-green-600 border-green-600 border rounded-md";
      break;
    case "readyOrder":
      cardBorderColor = "border border-orange-600";
      buttonColor =
        "bg-orange-600 hover:bg-transparent hover:text-orange-600 border-orange-600 border rounded-md";
      break;
    default:
      cardBorderColor = "border border-indigo-600";
      buttonColor =
        "bg-indigo-600 hover:bg-transparent hover:text-indigo-600 border-indigo-600 border rounded-md";
  }

  return (
    <div
      className={`border rounded-2xl divide-y divide-gray-200 className=" ${cardBorderColor}`}
      style={{
        boxShadow:
          "rgba(45, 50, 130, 0.15) 0px 12px 16px -4px, rgba(45, 50, 130, 0.15) 0px 4px 6px -2px",
      }}
    >
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-gray-600">
            {type === "readyOrder"
              ? "Order Ready"
              : type === "deliverOrder"
              ? "Deliver Order"
              : "New Order"}
          </h2>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Enter an order No.</p>
        <p className="mt-2">
          <input
            type="text"
            className="py-2 px-2 font-bold tracking-tight text-gray-900 w-full border border-[#414141] rounded-md"
            onChange={handleInputChange}
            value={token}
          />
        </p>
        <button
          className={`flex justify-center w-full py-3 mt-4 text-sm font-medium text-white ${buttonColor} active:text-indigo-500 focus:outline-none focus:ring`}
          onClick={
            type === "deliverOrder"
              ? orderDeliver
              : type === "readyOrder"
              ? createReadyOrder
              : createNewOrder
          }
        >
          {" "}
          {type === "readyOrder"
            ? "Move to Ready"
            : type === "newOrder"
            ? "Create New Order"
            : "Deliver This Order"}
        </button>
      </div>
      <div className="px-6 pt-6 pb-8">
        <h3 className="text-sm font-medium text-gray-900">{statusMessage}</h3>
      </div>
    </div>
  );
};

export default OrderCard;

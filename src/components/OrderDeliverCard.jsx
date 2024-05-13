import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../util";
import axios from "axios";
import { useMyContext } from "../Context/MyContext";

const OrderDeliverCard = ({ type, title }) => {
  const [pendingOrder, setPendingOrder] = useState([]);
  const [readyOrder, setReadyOrder] = useState([]);
  const [deliverOrder, setDeliverOrder] = useState([]);
  const { myVariable } = useMyContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pendingResponse, readyResponse, deliveredResponse] =
          await Promise.all([
            axios.get(BASE_URL + "api/v1/currentwaiting"),
            axios.get(BASE_URL + "api/v1/currentready"),
            axios.get(BASE_URL + "api/v1/currentdelivered"),
          ]);
        console.log(pendingResponse.data);
        console.log(readyResponse.data);
        console.log(deliveredResponse.data);
        setPendingOrder(pendingResponse?.data?.waitingTokens || []);
        setReadyOrder(readyResponse?.data?.readyTokens || []);
        setDeliverOrder(deliveredResponse?.data?.deliveredTokens || []);
      } catch (error) {
        console.log(error);
      }
    };

    // Call fetchData only when myVariable changes
    fetchData();
  }, [myVariable]);

  let borderColor, legendDecoration;
  switch (type) {
    case "pendingQueue":
      borderColor = "border-orange-600";
      legendDecoration = "decoration-orange-500/60 decoration-2";
      break;
    case "readyQueue":
      borderColor = "border-indigo-600";
      legendDecoration = "decoration-indigo-500/60 decoration-2";
      break;
    default:
      borderColor = "border-green-600";
      legendDecoration = "decoration-green-500/60 decoration-2";
  }

  return (
    <fieldset
      className={`text-xl max-w-sm border-4 rounded-lg overflow-y-auto h-[400px] p-2 ${borderColor}`}
    >
      <legend
        className={`px-2 text-md font-semibold underline ${legendDecoration}`}
      >
        {title}
      </legend>
      <div className="flex flex-col gap-2 px-2 text-md font-serif">
        {type === "pendingQueue" &&
          pendingOrder.map((item, index) => (
            <React.Fragment key={index}>
              <a href="#"># {item}</a>
              <hr />
            </React.Fragment>
          ))}
        {type === "readyQueue" &&
          readyOrder.map((item, index) => (
            <React.Fragment key={index}>
              <a href="#"># {item}</a>
              <hr />
            </React.Fragment>
          ))}
        {type === "delivered" &&
          deliverOrder.map((item, index) => (
            <React.Fragment key={index}>
              <a href="#"># {item}</a>
              <hr />
            </React.Fragment>
          ))}
      </div>
    </fieldset>
  );
};

export default OrderDeliverCard;

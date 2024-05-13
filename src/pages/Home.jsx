import React from 'react'
import { useState } from "react"
import StatusCard from '../components/StatusCard'
import Header from "../components/Header";
import Footer from "../components/Footer"
import axios from "axios";
const Home = () => {
    const [orderStatus, setOrderStatus] = useState("");
    const [orderNo, setOrderNo] = useState("");
    
    const onChangeHandler = (e) => {
      setOrderStatus("");
      setOrderNo(e.target.value)
    }

    const submitOrderNo = async () => {
        try {
          const token = orderNo;
          const response = await axios.post('http://localhost:4000/api/v1/myorderstatus', { token: token });
          if (response.status == 200) {
            const status = response?.data?.message;
            setOrderStatus(status);
          }
        }
        catch (e) {
          console.error("Error", e);
        }
    }


  return (
    <>
      <Header />
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex justify-center items-center flex-col py-5">
          <label
            htmlFor="price"
            className="block font-medium leading-6 text-gray-900 text-xl py-2"
          >
            Enter your Order No
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder=""
              value={orderNo}
              onChange={onChangeHandler}
            />
          </div>
          <button
            className="px-2 py-1 bg-blue-700 text-[#fff] rounded-md shadow-lg mt-3 text-sm uppercase font-medium"
            onClick={submitOrderNo}
          >
            Check Status{" "}
          </button>
        </div>
      </div>

      {orderStatus !== "" ? (
        <StatusCard message={orderStatus} orderNo={orderNo} />
      ) : (
        <></>
      )}
      <div className="flex flex-row gap-6 py-6 mb-20 mx-10 justify-center">
        {/* North Indian */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-green-600 text-white py-4 px-6 text-center">
            <h1 className="text-xl font-semibold">North Indian Dishes</h1>
            <p className="text-sm">Explore traditional flavors</p>
          </div>
          <div className="py-4 px-6">
            <h2 className="text-xl font-semibold mb-4 text-red-500">
              Main Course
            </h2>
            <ul className="mb-10">
              <li className="flex justify-between mb-2">
                <span className="font-semibold">Butter Paneer</span>
                <span className="text-blue-900 font-bold">₹250</span>
              </li>
              <li className="flex justify-between mb-2">
                <span className="font-semibold">Paneer Tikka</span>
                <span className="text-blue-900 font-bold">₹200</span>
              </li>
            </ul>
          </div>
        </div>

        {/* South Indian */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-green-600 text-white py-4 px-6 text-center">
            <h1 className="text-xl font-semibold">South Indian Dishes</h1>
            <p className="text-sm">Savor authentic delicacies</p>
          </div>
          <div className="py-4 px-6">
            <h2 className="text-xl font-semibold mb-4 text-red-500">
              Main Course
            </h2>
            <ul className="mb-10">
              <li className="flex justify-between mb-2">
                <span className="font-semibold">Masala Dosa</span>
                <span className="text-blue-900 font-bold">₹150</span>
              </li>
              <li className="flex justify-between mb-2">
                <span className="font-semibold">Idli-Sambhar</span>
                <span className="text-blue-900 font-bold">₹120</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Italian */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-green-600 text-white py-4 px-6 text-center">
            <h1 className="text-xl font-semibold">Italian Dishes</h1>
            <p className="text-sm">Indulge in Mediterranean flavors</p>
          </div>
          <div className="py-4 px-6">
            <h2 className="text-xl font-semibold mb-4 text-red-500">Pasta</h2>
            <ul className="mb-10">
              <li className="flex justify-between mb-2">
                <span className="font-semibold">Spaghetti Carbonara</span>
                <span className="text-blue-900 font-bold">₹300</span>
              </li>
              <li className="flex justify-between mb-2">
                <span className="font-semibold">Margherita Pizza</span>
                <span className="text-blue-900 font-bold">₹250</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Chinese */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-green-600 text-white py-4 px-6 text-center">
            <h1 className="text-xl font-semibold">Chinese Dishes</h1>
            <p className="text-sm">Experience Oriental flavors</p>
          </div>
          <div className="py-4 px-6">
            <h2 className="text-xl font-semibold mb-4 text-red-500">
              Stir Fry
            </h2>
            <ul className="mb-10">
              <li className="flex justify-between mb-2">
                <span className="font-semibold">Chilli Paneer</span>
                <span className="text-blue-900 font-bold">₹220</span>
              </li>
              <li className="flex justify-between mb-2">
                <span className="font-semibold">Manchurian</span>
                <span className="text-blue-900 font-bold">₹180</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home

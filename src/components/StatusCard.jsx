import React from 'react'

const StatusCard = (message) => {
  return (
    <div className="flex justify-center items-center ">
      <a className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-[#50C878]">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Your Order #{message.orderNo}</h5>
<p className="font-normal dark:text-[#fff]">{message.message}</p>
</a>
    </div>
  )
}

export default StatusCard

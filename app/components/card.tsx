import React from 'react'

const Card = (props:any) => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
        <div className="h-64 w-auto md:w-1/2">
            <img className="inset-0 h-full w-full object-cover object-center" src= {props.item.picture} />
        </div>
        <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
        <h2 className="font-semibold text-3xl leading-tight truncate">{props.item.title}</h2>
        <p className="mt-2">
        {props.item.content.substring(0, 150) + " ..."}
        </p>
        <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
        {"Muhammad Usman"} &bull; {"-/-/-"}
        </p>
        </div>
    </div>
  )
}
export default Card

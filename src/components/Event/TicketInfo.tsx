import React from "react";

interface TicketInfoProps {
  availability: string;
  price: number;
  currency: string;
  ticketUrl: string;
}

const TicketInfo = ({ price, currency, availability }: TicketInfoProps) => (
  <div className="p-4 bg-gray-800 text-white rounded-lg sticky top-16 z-10">
    <h3 className="text-xl font-bold mb-2">From {currency} {price.toFixed(2)}</h3>
    <button className="bg-blue-500 w-full py-2 rounded-lg mb-2">Get Tickets</button>
    <button className="border w-full py-2 rounded-lg">Share Event</button>
    {!availability && <p className="text-red-500 mt-2">Sold Out</p>}
  </div>
);

export default TicketInfo;

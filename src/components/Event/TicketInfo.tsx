import React from "react";

interface TicketInfoProps {
  availability: string;
  price: number;
  currency: string;
}

const TicketInfo = ({ price, currency, availability }: TicketInfoProps) => (
  <div className="rounded-lg bg-gray-800 p-4 lg:p-6 space-y-4 lg:sticky top-16 z-20">
    <div className="hidden lg:block">
      <p className="font-normal text-gray-300 text-lg">
        <strong>From </strong>
        {currency} {price.toFixed(2)}
      </p>
    </div>
    
    <a className="w-full border border-gray-800 rounded-lg py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 bg-brand-500 hover:bg-brand-400 focus:ring-brand-400">Get Tickets</a>
    <button className="border w-full py-2 rounded-lg">Share Event</button>
    {!availability && <p className="text-red-500 mt-2">Sold Out</p>}
  </div>
);

export default TicketInfo;

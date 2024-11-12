import React from "react";
import Attendees from "./Attendees";
import TicketInfo from "./TicketInfo";
import { formatEventDate } from "@/utils/date-functions";
import { generateTags } from "@/utils/useful-helpers";

interface EventDetailsCardProps {
  availability: string,
  price: number,
  currency: string,
  location: {
    location_name: string;
    address_line: string;
    city: string;
    postal_code: string;
  };
  startdate: string;
  enddate: string;
  attendees: Array<{ avatar: string; name: string }>;
  categorization: {
    category: string,
    category_localized: string,
    subcategory: string,
    subcategory_localized: string,
    type: string,
    type_localized: string,
  };
}

const EventDetailsCard: React.FC<EventDetailsCardProps> = ({
  availability,
  price,
  currency,
  location,
  startdate,
  enddate,
  attendees,
  categorization
}) => {

  const tags = generateTags(categorization, location);
  
  return (
    <div className="h-full lg:row-start-1 lg:row-end-7 lg:col-start-3 has-[:focus-visible]:overflow-hidden [&>*:first-child]:has-[:focus-visible]:top-0">

      <TicketInfo 
        price={price}
        currency={currency}
        availability={availability}
      />
      <div className="rounded-lg bg-gray-800 p-4 lg:p-6 mt-4 hidden lg:block">
        <div className="space-y-8 pt-4">
          {/* Location Section */}
          <div>
            <h2 className="text-sm text-white font-bold leading-4 m-0">Location</h2>
            <span className="text-gray-300 text-sm">{location.location_name}</span>
            <span className="text-gray-300 text-sm">{location.address_line}</span>
            <span className="text-gray-300 text-sm">
              {location.city}, {location.postal_code}
            </span>
          </div>

          {/* Date Section */}
          <div className="space-y-4 border-gray-700 border-t pt-4 first:pt-0 first:border-none">
            <h4 className="text-sm text-white font-bold leading-4 m-0">Date</h4>
            <div className="text-gray-300 text-sm">
              {/* Format - User Friendly */}
              {formatEventDate(startdate, enddate) }
            </div>
          </div>

          {/* Attendees Section */}
          <Attendees attendees={attendees} />

          {/* Tags Section */}
          <div className="space-y-4 border-gray-700 border-t pt-4 first:pt-0 first:border-none">
            <h2 className="text-sm text-white font-bold leading-4 m-0">Tags</h2>
            <div className="flex gap-2 items-center flex-wrap">
              {tags.map((tag, index) => (
                <a
                  key={index}
                  className="inline-flex items-center border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-400 p-1.5 text-xs border-brand-200 text-brand-200 hover:text-brand-100 p-2 rounded-full"
                >
                  <span className="leading-none">
                    {tag}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="space-y-4 border-gray-700 border-t pt-4 first:pt-0 first:border-none">
            <img
              src="https://bun2.billetto.com/assets/peace_of_mind-41e3910ac01c07b540c284afba8089ae79d68dc40f4401db24339662240beab5.svg"
              alt="Billetto"
              className="h-10 w-auto"
            />
            <div className="text-gray-300 text-sm">
              Book with confidence: Billetto guarantees refunds for cancelled
              events, ensuring your peace of mind.{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="space-y-4 border-gray-700 border-t pt-4 first:pt-0 first:border-none">
            <div className="text-gray-300 text-sm">
              Payment methods accepted:
            </div>
            <img src="https://bun2.billetto.com/assets/icon/apple-pay-08b333e5218a9bea5932811a6ee108d6da7af5a196d23994081a7a5df63e9aa9.svg" alt="Apple Pay" className="w-10 inline-flex pr-2" loading="lazy" />
            <img src="https://bun2.billetto.com/assets/icon/google-pay-065e42966e3ce795563cfa7e500d0ed74afa6c8218062a12ef62924e2d130fd9.svg" alt="Google Pay" className="w-10 inline-flex pr-2" loading="lazy" />
            <img src="https://bun2.billetto.com/assets/icon/visa-afc0fa1fdb54520c13c2c7e2ec5149503ed390a5c3cf1f9e7792e97e541e02b7.svg" alt="Visa" className="w-10 inline-flex pr-2" loading="lazy" />
            <img src="https://bun2.billetto.com/assets/icon/mastercard-3a2f29c5e46a83b7d512a5f90c8134079685e0aa1338b96811d2819524da69bb.svg" alt="MasterCard" className="w-10 inline-flex pr-2" loading="lazy" />
            <img src="https://bun2.billetto.com/assets/icon/amex-c4da4c43ad97d64f36a879b0dba214482e4ca40737be9f2af7f6e90afbb9de06.svg" alt="American Express" className="w-10 inline-flex pr-2" loading="lazy" />
            <img src="https://bun2.billetto.com/assets/icon/klarna-20cc6aae14dbb09fafe45d082a6b15ecbfef4ba3b0e0a494eb37f45bf4c19a79.svg" alt="Klarna" className="w-10 inline-flex pr-2" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default EventDetailsCard;

import Attendees from "./Attendees";

const EventDetailsCard = ({
  price,
  currency,
  attendees,
  availability,
  location,
  startdate,
  enddate,
  categorization,
}: {
  price: number;
  currency: string;
  attendees: array;
  availability: boolean;
  location: { location_name: string; address_line: string; city: string; postal_code: string };
  startdate: string;
  enddate: string;
  categorization: { category_localized: string; subcategory_localized: string; type_localized: string };
}) => (
  <div className="p-4 bg-gray-800 text-white rounded-lg sticky top-16 z-10 space-y-4">
    {/* Price and Tickets */}
    <h3 className="text-xl font-bold">From {currency} {(price*100).toFixed(2)}</h3>
    <button className="bg-blue-500 w-full py-2 rounded-lg">Get Tickets</button>
    <button className="border w-full py-2 rounded-lg">Share Event</button>
    {!availability && <p className="text-red-500 mt-2">Sold Out</p>}

    {/* Location */}
    <div>
      <h4 className="text-lg font-semibold">Location</h4>
      <p>{location.location_name}</p>
      <p>{location.address_line}</p>
      <p>{location.city}, {location.postal_code}</p>
    </div>

    {/* Date */}
    <div>
      <h4 className="text-lg font-semibold">Date</h4>
      <p>{new Date(startdate).toLocaleString()} - {new Date(enddate).toLocaleString()}</p>
    </div>

    {/* Tags */}
    <div>
      <h4 className="text-lg font-semibold">Tags</h4>
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          {categorization.category_localized}
        </span>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          {categorization.subcategory_localized}
        </span>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          {categorization.type_localized}
        </span>
      </div>
    </div>

    <Attendees attendees={attendees} />
  </div>
);

export default EventDetailsCard;

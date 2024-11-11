import { faker } from "@faker-js/faker";

const Attendees = ({attendees}: {attendees: any}) => {

  return (
    <div className="border-gray-700 border-t pt-4 first:pt-0 first:border-none empty:border-none empty:pt-0">
      <div className="space-y-4">
        <h2 className="text-sm text-white font-bold leading-5">Attendees</h2>
        <div className="flex flex-wrap min-h-8 items-center pl-1">
          {attendees.map((attendee: any, index: number) => (
            <div className="inline-block -ml-1">
              <div className="h-6 w-6 rounded-full ring-2 ring-white relative overflow-hidden">
                <img
                  key={index}
                  src={attendee.attributes.profile_picture_url}
                  className="absolute w-full h-full"
                />
              </div>
            </div>
          ))}

          <div className="text-sm ml-5 text-brand-200 hover:text-brand-100">
            {attendees.length > 5 && (
              <span className="text-blue-500 text-sm">See more</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendees
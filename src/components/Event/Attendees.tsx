import { faker } from "@faker-js/faker";

const Attendees = ({attendees}: {attendees: any}) => {

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Attendees</h3>
      <div className="flex">
        {attendees.map((attendee: any, index: number) => (
          <img
            key={index}
            src={attendee.attributes.profile_picture_url}
            className="w-8 h-8 rounded-full border-2 border-white -ml-3"
          />
        ))}
      </div>
    </div>
  );
};

export default Attendees
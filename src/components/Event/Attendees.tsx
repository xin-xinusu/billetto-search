import Avatar from "../UI/Avatar";

interface AttendeeTypes {
  id: string;
  type: string;
  attributes: {
    has_profile_picture: boolean;
    name: string; // Can be an empty string
    profile_picture_url: string; // Profile picture URL
    slug: string;
  };
  links: {
    self: string;
  };
}

const Attendees = ({ attendees }: { attendees: AttendeeTypes[] }) => {
  return (
    <div className="border-gray-700 border-t pt-4 first:pt-0 first:border-none empty:border-none empty:pt-0">
      <div className="space-y-4">
        <h2 className="text-sm text-white font-bold leading-5">Attendees</h2>
        <div className="flex flex-wrap min-h-8 items-center pl-1">
          {attendees.map((attendee) => (
            <div key={attendee.id} className="inline-block">
              <Avatar
                name={attendee.attributes.name || "Anonymous"}
                profilePicture={
                  attendee.attributes.has_profile_picture
                    ? attendee.attributes.profile_picture_url
                    : null
                }
              />
            </div>
          ))}

          {/* Show "See More" if there are more than 20 attendees */}
          {attendees.length > 20 && (
            <div className="text-sm ml-3 text-blue-500 hover:underline flex items-center">
              See more <span className="ml-1">→</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default Attendees;

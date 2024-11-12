import React from "react";
import DOMPurify from "dompurify";

interface OrganiserInfoProps {
  organiser: {
    id: string;
    attributes: {
      name: string;
      profile_description: string;
      profile_picture_url?: string;
      cover_image_url?: string;
      url?: string;
      facebook_url?: string;
      twitter_url?: string;
      instagram_url?: string;
      linkedin_url?: string;
      verified: boolean;
      has_profile_picture: boolean;
      created_at: string;
    };
  };
}

const OrganiserInfo: React.FC<OrganiserInfoProps> = ({ organiser }) => {
  const {
    name,
    profile_description,
    profile_picture_url,
    cover_image_url,
    url,
    facebook_url,
    twitter_url,
    instagram_url,
    linkedin_url,
    verified,
    has_profile_picture,
    created_at,
  } = organiser.attributes;

  return (
    <div className="lg:col-span-2 pt-4">
      <div className="sm:rounded-lg bg-gray-800 p-4 lg:p-6 space-y-4 group">
        {/* Header */}
        <h2 className='text-white group-hover:text-gray-300 font-bold leading-4 m-0'>Organiser</h2>

        {/* Profile Section */}
        <div className="flex justify-between items-center flex-wrap sm:flex-nowrap">
          {/* Left Section: Profile Picture + Name/Description */}
          <div>
            <div className="text-white font-bold leading-4 block justify-between">
              <div className="flex items-center gap-4 ">
                <div className="shrink-0 size-12">
                  {profile_picture_url ? (
                    <img
                      src={profile_picture_url}
                      alt={`${name} profile`}
                      className="size-12 rounded-full"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-gray-400">
                      {name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                <div className="w-full grow">
                  <h3 className="text-white m-0 text-lg leading-6 font-medium">
                    {name}
                    {verified && (
                      <span className="text-blue-500 text-sm pl-4">✔ Verified</span>
                    )}
                  </h3>
                  <p className="m-0 text-sm text-gray-400">Event Organiser</p>
                </div>

                <div className='w-full inline-flex'>
                  <a
                    href={`#`}
                    className="inline-flex items-center border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-400 rounded-md px-4 py-2 text-sm text-gray-50 bg-gray-800 hover:bg-gray-700"
                  >
                    Contact
                  </a>
                </div>
                {/* <div className="inline-flex items-center border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-400 rounded-md px-4 py-2 text-sm text-gray-50 bg-gray-800 hover:bg-gray-700">
                  <button className="ml-4 mt-4 shrink-0 flex gap-4">
                    <span className="leading-none">Contact</span>
                  </button>
                </div> */}

              </div>
            </div>
          <div>
            
            {profile_description && (
              <div
                className="text-gray-400 mt-2 text-sm"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(profile_description),
                }}
              />
            )}
            {created_at && (
              <p className="text-gray-500 text-xs mt-1">
                Member since: {new Date(created_at).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default OrganiserInfo;

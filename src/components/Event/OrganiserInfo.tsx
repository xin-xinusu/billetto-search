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
    <div className="p-4 bg-gray-900 text-white rounded-lg mt-4">
      {/* Header */}
      <h4 className="text-lg font-semibold mb-4">Organiser</h4>

      {/* Profile Section */}
      <div className="flex items-start justify-between">
        {/* Left Section: Profile Picture + Name/Description */}
        <div className="flex items-start gap-4">
          {/* Profile Picture */}
          {profile_picture_url ? (
            <img
              src={profile_picture_url}
              alt={`${name} profile`}
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-gray-400">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        {/* Organiser Info */}
        <div>
          <h5 className="text-lg font-bold flex items-center gap-2">
            {name}
            {verified && (
              <span className="text-blue-500 text-sm">✔ Verified</span>
            )}
          </h5>
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

       {/* Right Section: Contact Button */}
       <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-lg">
          Contact
        </button>
      </div>
    </div>
  );
};

export default OrganiserInfo;

import { getInitials, getRandomColor } from "@/utils/useful-helpers";

interface AvatarProps {
  name: string;
  profilePicture?: string | null;
}

const Avatar: React.FC<AvatarProps> = ({ name, profilePicture }) => {
  const initials = getInitials(name || "Anonymous");

  return (
    <div className="h-6 w-6 rounded-full ring-2 ring-white relative overflow-hidden">
      <div className="absolute w-full h-full flex items-center justify-center bg-purple-500 whitespace-nowrap uppercase tracking-tighter text-[10px] text-white">
        {profilePicture ? (
          <div
            style={{
              background: `url(${profilePicture}) center center / cover no-repeat`,
            }}
            className="absolute w-full h-full"
            role="presentation"
          />
        ) : (
          <div
            className="absolute w-full h-full flex items-center justify-center"
            style={{ backgroundColor: getRandomColor() }}
            role="img"
            aria-label={initials}
          >
            <span className="uppercase text-white text-[10px] tracking-tight">
              {initials}
            </span>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Avatar;

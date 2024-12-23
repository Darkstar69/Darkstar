import PropTypes from "prop-types";
import { useEffect } from "react";

const profileData = {
  name: "Arnab Maity",
  description:
    "Hi, I'm Arnab Maity. I'm a software developer with a passion for creating amazing web applications. I love working with React and exploring new technologies.",
  image: "https://avatars.githubusercontent.com/u/135945097?v=4",
};

const Profile = ({ setShowProfile, showProfile }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setShowProfile(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setShowProfile]);
  return (
    <div
      className="h-screen w-screen backdrop-blur fixed z-50 top-0 left-0 right-0 bottom-0 bg-black/30 flex items-center justify-center transition-all delay-75 ease-in-out"
      onClick={() => setShowProfile(!showProfile)}
    >
      <div
        className="flex flex-col items-center p-4 bg-blue-700 shadow-md rounded-lg w-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={profileData.image}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-xl text-white font-semibold mb-2">
          {profileData.name}
        </h2>
        <p className="text-gray-300 text-center">{profileData.description}</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  setShowProfile: PropTypes.func.isRequired,
  showProfile: PropTypes.bool.isRequired,
};

export default Profile;

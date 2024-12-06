import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* About Section */}
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg space-y-6">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-purple-700">
          About This Website
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 text-center">
          Welcome to our website! 🎉 Our mission is to provide a platform that
          allows you to create and share unique birthday wishes with your loved
          ones. You can easily generate personalized URLs, upload images, and
          celebrate your friend's special day in a memorable way. 🌟
        </p>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Website Logo"
            className="w-32 h-32 rounded-full border-4 border-purple-700 shadow-lg"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center text-purple-700 mt-4">
          Hardy
        </h2>

        <Link to="/">
          <div className="flex justify-center mt-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform active:scale-95">
              Create
            </button>
          </div>
        </Link>
        {/* Links Section */}
        <div className="flex justify-center space-x-6">
          {/* GitHub Link */}
          <a
            href="https://https://github.com/Chayanethic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z"
              />
            </svg>
            <span>GitHub</span>
          </a>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-400 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.362 3.638a9.004 9.004 0 00-12.725 12.725L4.83 21.172a1 1 0 001.314-1.314l2.387-2.387a1 1 0 00.211-.146c.324-.19.694-.346 1.1-.485a8.953 8.953 0 004.804-1.255c2.13-1.257 3.682-3.16 4.086-5.401.49-2.267.02-4.59-1.345-6.528zm-2.413 4.786c.355 1.222.08 2.556-.632 3.516-1.154 1.467-3.032 2.206-4.973 2.25-1.04.021-2.072-.316-2.858-.892-.35-.256-.671-.561-.948-.889-1.045-.226-1.953-.883-2.607-1.737-.832-1.084-1.258-2.36-1.346-3.652-.162-1.158.097-2.348.699-3.286 1.031-1.194 2.693-1.68 4.141-.828.214-.117.462-.222.711-.314 1.508-.555 3.095-.895 4.688-.92 1.349.055 2.53.938 3.123 2.056zm-4.573-5.568c.042-.216.106-.427.172-.637.51-.996 1.402-1.595 2.381-1.834.148-.045.295-.079.44-.122.278-.085.555-.183.827-.288a4.614 4.614 0 00-3.022-.666c-.45.137-.906.324-1.36.52-.085.037-.173.075-.26.112a4.455 4.455 0 00-.506 3.636 5.72 5.72 0 001.838-.137c.58-.206"
              />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

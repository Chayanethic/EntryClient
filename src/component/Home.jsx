import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageurl, setImageUrl] = useState(null);

  const backendUrl = "https://wishbirthday.vercel.app";

  const handleSubmit = async () => {
    // const id = Math.random().toString(36).substr(2, 9);

    setLoading(true);

    const uniqueid = uuidv4();
    try {
      // Validate the name input
      if (!name) {
        toast("Please enter a name");
        setLoading(false);
        return;
      }

      let finalImageUrl = imageurl; // Use the existing `imageurl` if already set

      // If an image is provided but `imageurl` is not yet set, upload it
      if (image && !imageurl) {
        finalImageUrl = await handleUpload();
      }

      console.log("Sending data to backend:", {
        name,
        uniqueid,
        finalImageUrl,
      });

      // Send the data to the backend
      const response = await axios.post(`${backendUrl}/addwish`, {
        name,
        uniqueid,
        imageurl: finalImageUrl, // Use the updated image URL
      });
      console.log("response from server", response);
      if (response) {
        setLoading(false);
        const newUrl = `https://localhost:5174/wish/${uniqueid}`;
        setUrl(newUrl);
      }
    } catch (error) {
      console.error("Error pushing data:", error);
      setLoading(false);
    }
  };

  // This function handles the image upload to Cloudinary
  const handleUpload = async () => {
    // Prepare the form data
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "birthday"); // Replace with your preset name
    formData.append("cloud_name", "dnpudf84r"); // Replace with your cloud name
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dnpudf84r/image/upload",
        formData
      );
      if (response) {
        const uploadedUrl = response.data.secure_url;
        setImageUrl(uploadedUrl); // Update the state
        toast("Image uploaded successfully!");
        return uploadedUrl; // Return the URL
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast("Failed to upload image!");
      setLoading(false);
      throw error; // Throw the error to handle it in the calling function
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleShare = () => {
    const message = `🎉 Hey! Check out this amazing birthday link: ${url}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
  };

  // This function handles the image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-orange-500 via-pink-500 to-yellow-500 flex items-center justify-center">
        <Link to="/about">
          <button className="cursor-pointer absolute top-4 right-4 bg-white text-purple-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-all duration-300 z-10">
            Creator
          </button>
        </Link>

        {/* Animated Balloons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-16 h-16 bg-pink-400 rounded-full top-[-20%] left-[10%] animate-bounce" />
          <div className="absolute w-20 h-20 bg-blue-400 rounded-full top-[-10%] left-[30%] animate-bounce animation-delay-200" />
          <div className="absolute w-14 h-14 bg-yellow-400 rounded-full top-[20%] left-[60%] animate-bounce animation-delay-400" />
        </div>

        <div
          className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-pink-50 to-white rounded-lg shadow-2xl relative border-l-[8px] border-r-[8px] border-pink-300"
          style={{
            marginLeft: "0",
            marginRight: "0",
            boxShadow:
              "4px 8px 20px rgba(0, 0, 0, 0.1), inset -4px -4px 20px rgba(255, 255, 255, 0.5)",
          }}
        >
          <h1 className="text-3xl font-bold text-center text-pink-600 mb-4 animate-pulse drop-shadow-lg ">
            Wish Happy Birthday! 🎉
          </h1>
          <h2
            className="text-1xl font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             p-2 rounded-lg shadow-xl shadow-purple-600/40 relative text-center 
             hover:scale-105 hover:shadow-2xl hover:shadow-pink-600/50 transform transition-all duration-300"
          >
            Make your friend's birthday with a personalized URL
          </h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Enter name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              placeholder="Who’s the birthday person?"
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-300 shadow-inner"
            />
          </div>

          <form className="space-y-4">
            <label className="block text-gray-700 font-medium">
              Upload an image — your choice can say a thousand words!
            </label>
            <input
              type="file"
              className="block w-full text-sm text-slate-500
        file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100 focus:file:ring-2 focus:file:ring-violet-500 shadow-md"
              onChange={handleImageChange}
            />
          </form>

          <div className="flex justify-center mb-6 mt-4">
            <button
              onClick={handleSubmit}
              className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-pink-600 hover:shadow-lg transition-all duration-300 flex items-center"
            >
              {loading ? (
                <span className="loader border-2 border-white border-t-transparent border-solid rounded-full w-5 h-5 mr-2 animate-spin"></span>
              ) : (
                "Create ✨"
              )}
            </button>
          </div>

          {url && (
            <div className="mb-6">
              <p className="text-lg font-bold text-gray-800 mb-2 text-center">
                Your unique URL:
              </p>
              <div className="grid grid-cols-[1fr,auto] items-center gap-3 w-full bg-gray-100 p-3 rounded-lg shadow-inner">
                <p className="truncate text-gray-700">{url}</p>
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 shadow hover:shadow-lg transition-all"
                  onClick={() => window.open(url, "url")}
                >
                  Open
                </button>
              </div>

              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={handleCopy}
                  className={`px-6 py-2 rounded-lg ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                  } transition-all shadow-md`}
                >
                  {copied ? "Copied!" : "Copy URL"}
                </button>
                <button
                  onClick={handleShare}
                  className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-all shadow-md"
                >
                  Share URL
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

// import React, { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [name, setName] = useState("");
//   const [uniqueid, setUniqueId] = useState("");
//   const [retrievedName, setRetrievedName] = useState("");

//   const backendUrl = "https://wishbirthday.vercel.app"; // Update this based on your backend URL

//   // Function to add a new wish
//   const addWish = async () => {
//     try {
//       const response = await axios.post(`${backendUrl}/addwish`, {
//         name,
//         uniqueid,
//       });
//       alert("Wish added successfully!");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error adding wish:", error.message);
//     }
//   };

//   // Function to fetch a wish by uniqueid
//   const fetchWish = async () => {
//     try {
//       const response = await axios.get(`${backendUrl}/wish/${uniqueid}`);
//       setRetrievedName(response.data); // Assuming the response is the name
//     } catch (error) {
//       console.error("Error fetching wish:", error.message);
//       setRetrievedName("Wish not found");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Birthday Wishes</h1>

//       {/* Form for adding a new wish */}
//       <div>
//         <h2>Add a Wish</h2>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Enter Unique ID"
//           value={uniqueid}
//           onChange={(e) => setUniqueId(e.target.value)}
//         />
//         <button onClick={addWish}>Add Wish</button>
//       </div>

//       {/* Form for retrieving a wish */}
//       <div style={{ marginTop: "20px" }}>
//         <h2>Fetch a Wish by Unique ID</h2>
//         <input
//           type="text"
//           placeholder="Enter Unique ID"
//           value={uniqueid}
//           onChange={(e) => setUniqueId(e.target.value)}
//         />
//         <button onClick={fetchWish}>Fetch Wish</button>
//         {retrievedName && (
//           <p>
//             <strong>Wish:</strong> {retrievedName}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

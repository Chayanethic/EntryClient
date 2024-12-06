import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Birthdaywish = () => {
  const [retrievedName, setRetrievedName] = useState("");
  const { id } = useParams();
  const backendUrl = "https://wishbirthday.vercel.app";

  // Fetch data when the component mounts
  useEffect(() => {
    // Call the fetchWish function when the component mounts
    fetchWish();
  }, [id]); // The empty array means the effect runs only when the component mounts

  const fetchWish = async () => {
    try {
      const response = await axios.get(`${backendUrl}/wish/${id}`);
      console.log(response.data);
      setRetrievedName(response.data); // Assuming the response is the name
    } catch (error) {
      console.error("Error fetching wish:", error.message);
      setRetrievedName("Wish not found");
    }
  };
  return (
    <div>
      <h1>
        Birthday wish for: {retrievedName ? retrievedName : "Loading..."} (ID:{" "}
        {id})
      </h1>
    </div>
  );
};

export default Birthdaywish;

import React from "react";

const Contacts = () => {
  return (
    <div>
      <div className="font-bold">Contact Us</div>
      <h1>Contact Me:</h1>deepmaurya3440@gmail.com
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="Your Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="Your Message"
        />
        <button className="bg-black text-white p-2 m-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contacts;

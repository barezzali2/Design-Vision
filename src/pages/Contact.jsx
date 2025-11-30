import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />

      <div className="px-6 md:px-20 py-10 text-center mx-7">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Do not Hesitate Contact Us
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
          We’d love to hear from you. Whether you’re interested in working together, have a question, 
          or simply want to say hello — feel free to reach out using the details below.
        </p>

        <div className="max-w-2xl mx-auto text-gray-500 space-y-4">
          <p><span className="font-semibold">Email: </span><a href="#">info@designvision.agency</a></p>
          <p><span className="font-semibold">Phone: </span> <a href="#">+964 772 542 0063</a></p>
          <p><span className="font-semibold">Location: </span>Sulaymaniyah, Kurdistan Region, Iraq</p>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Send Us a Message</h2>

        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded-md outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded-md outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border px-4 py-2 rounded-md outline-none"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-2 cursor-pointer bg-indigo-500 text-white rounded-md hover:bg-indigo-800 transition"
          >
            Send
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;

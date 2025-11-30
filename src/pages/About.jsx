import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar />

      <div className="px-6 md:px-20 py-10 text-center mx-7">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          About Our Design Vision Agency
        </h1>

        <p className="text-gray-500 max-w-2xl leading-relaxed mb-10 mx-auto">
          We are a creative design agency focused on turning ideas into clean,
          modern, and meaningful digital experiences. Our goal is simple:
          combine creative thinking with practical design to help brands
          communicate clearly and effectively.
        </p>


        <div className="md:flex md:justify-between md:text-center ">
          
        <div>
        <h2 className="text-2xl font-semibold mb-4 mt-20">What We Do</h2>
        <p className="text-gray-500 md:max-w-90 leading-relaxed mb-8 mx-auto">
          We specialize in visual identity, web design, and digital
          storytelling. We believe good design is not only about looks, rather it
          should solve a problem, deliver a message, and create a lasting
          impression.
        </p>
        </div>

        <div>
        <h2 className="text-2xl font-semibold mb-4 mt-15">Our Values</h2>
        <ul className="text-gray-500 space-y-2">
          <li>• Simple and clean design</li>
          <li>• Attention to detail</li>
          <li>• Creativity with purpose</li>
          <li>• Working closely with clients</li>
        </ul>
        </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default About;

import React from "react";

const services = [
  {
    title: "Social Media Management",
    icon: "📱",
    description: "Engaging content for blogs, social media, and marketing campaigns.",
    bg: "from-[#4f3f99]/80 via-[#181c64]/90 to-[#26a8df]/80",
  },
  {
    title: "UX/UI Design",
    icon: "🎨",
    description: "Crafting intuitive and beautiful user experiences for web and mobile platforms.",
    bg: "from-[#4b0d00]/80 via-[#311c24]/90 to-[#002066]/80",
  },
  {
    title: "Web Development",
    icon: "💻",
    description: "Building fast, responsive, and scalable web applications tailored to your needs.",
    bg: "from-[#003396]/30 via-[#181c44]/90 to-[#26a8df]/65",
  },
  {
    title: "Brand Identity",
    icon: "🚀",
    description: "Creating memorable brands with unique logos, colors, and visual guidelines.",
    bg: "from-[#f7941f]/80 via-[#481c94]/90 to-[#eb1d25]/80",
  },
  {
    title: "Content Creation",
    icon: "📝",
    description: "Engaging content for blogs, social media, and marketing campaigns.",
    bg: "from-[#4f3f99]/80 via-[#181c64]/90 to-[#26a8df]/80",
  },
  {
    title: "Poster Design",
    icon: "🖼️",
    description: "Creative and eye-catching poster designs for your campaigns.",
    bg: "from-[#f9d423]/80 via-[#ff4e50]/90 to-[#f9d423]/80",
  },
  {
    title: "Logo Design",
    icon: "🌟",
    description: "Unique and memorable logos that represent your brand.",
    bg: "from-[#00c3ff]/80 via-[#ffff1c]/90 to-[#00c3ff]/80",
  },
  {
    title: "Digital Marketing",
    icon: "📈",
    description: "Strategies to grow your business and reach a wider audience.",
    bg: "from-[#fc5c7d]/80 via-[#6a82fb]/90 to-[#fc5c7d]/80",
  },
];

function ServicesPage() {
  return (
    <div className="mt-20 md:mt-15 w-[94%] max-w-6xl mx-auto px-4">
      <header className="text-center mb-12">
        <h1 className="text-[25px] md:text-4xl font-extrabold text-white mb-4">
          Our Provided Services
        </h1>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          Discover how we can help elevate your brand with our range of expert services tailored to your needs.
        </p>
      </header>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 text-white bg-gradient-to-br ${service.bg} shadow-lg flex flex-col items-center text-center transform transition-transform hover:scale-105 cursor-pointer`}
          >
            <div className="text-6xl mb-5 animate-bounce">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-base">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Additional contents below services */}

      <section className="text-center mb-20 px-4">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Ready to take your business to the next level?
        </h2>
        <p className="mt-8 mb-10 md:mt-6 md:mb-8 text-gray-500 max-w-2xl mx-auto">
          Partner with us to transform your ideas into reality. Whether you’re a startup or an established business, our expert team is here to support your growth.
        </p>
        <a href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
          Get Started Today
        </a>
      </section>

      <section className="mb-16 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          <blockquote className="bg-gray-800 rounded-lg p-6 shadow">
            <p className="italic mb-4">
              "The team’s creativity and dedication helped us amplify our brand presence across social media platforms."
            </p>
            <footer className="text-sm font-semibold text-gray-400">— Alex Johnson, CEO</footer>
          </blockquote>
          <blockquote className="bg-gray-800 rounded-lg p-6 shadow">
            <p className="italic mb-4">
              "Exceptional web development service that perfectly matched our requirements and deadlines."
            </p>
            <footer className="text-sm font-semibold text-gray-400">— Priya Singh, Product Manager</footer>
          </blockquote>
          <blockquote className="bg-gray-800 rounded-lg p-6 shadow">
            <p className="italic mb-4">
              "Their brand identity work brought a fresh and modern look to our company that our customers love."
            </p>
            <footer className="text-sm font-semibold text-gray-400">— Michael Lee, Marketing Head</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;

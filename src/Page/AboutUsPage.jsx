import React from "react";

const AboutUsPage = () => {
  return (
    <div className="about-us  min-h-screen flex flex-col items-center justify-start pt-16 pb-16 px-4 md:px-12">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        AutoPlantCare
      </h1>

      {/* Introduction Section */}
      <div className="intro max-w-4xl text-center text-green-700 mb-8 space-y-4">
        <p>
          Welcome to <strong>AutoPlantCare</strong>, your reliable partner in
          automating plant care with cutting-edge technology. We aim to make
          gardening and plant care effortless and enjoyable for everyone.
        </p>
        <p>
          Whether you're an avid gardener or a busy professional, our solutions
          help you ensure your plants thrive without the stress.
        </p>
      </div>

      {/* Features Section */}
      <div className="features grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Feature 1 */}
        <div className="feature bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            Smart Irrigation
          </h2>
          <p className="text-green-700">
            Automatically water your plants based on soil moisture, weather
            forecasts, and plant needs.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            Plant Monitoring
          </h2>
          <p className="text-green-700">
            Track your plants' health, growth, and environmental conditions
            through real-time data.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            Energy Efficient
          </h2>
          <p className="text-green-700">
            Our systems are designed to minimize water and energy usage,
            ensuring sustainability.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="feature bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            User-Friendly WebApp
          </h2>
          <p className="text-green-700">
            Control and monitor your plant care system from anywhere using our
            intuitive mobile app.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section max-w-4xl mt-12">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          Meet Our Team
        </h2>
        <div className="team-members grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Member 1 */}
          <div className="member text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-green-300"> <img src="src/assets/akshay.jpg" className="rounded-full" alt="" /></div>
            <h3 className="text-lg font-semibold text-green-800">Akshay</h3>
            <p className="text-sm text-green-700">Founder & CEO</p>
          </div>

          {/* Member 2 */}
          <div className="member text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-green-300"> <img src="src/assets/harry.jpg" className="rounded-full" alt="" /></div>
            <h3 className="text-lg font-semibold text-green-800">Harish</h3>
            <p className="text-sm text-green-700">Lead Engineer</p>
          </div>

          {/* Member 3 */}
          <div className="member text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-green-300"> <img src="src/assets/adi.jpg" className="rounded-full" alt="" /></div>
            <h3 className="text-lg font-semibold text-green-800">Aditya</h3>
            <p className="text-sm text-green-700">UX/UI Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

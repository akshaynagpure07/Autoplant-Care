import React, { useState } from "react";

function LocationsMap() {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  return (
    <div className="locations-map h-72 w-80 flex flex-col justify-start">
      <p className="map-heading text-xs pb-1">Active Locations</p>
      <div className="map-container border-none h-64 w-80 rounded-2xl shadow-grey-600 shadow-md overflow-hidden relative">
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <div className="loader"></div>
            <p className=" text-lg font-bold text-color-text">Loading map...</p>
          </div>
        )}

        {/* Google Maps iframe */}
        <iframe
          className="border-0 h-full w-full left-0 right-0 top-0 absolute"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5714868283244!2d79.10006978514424!3d21.12964353415883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1ba5430407d%3A0x5ee765037dfc94e6!2sKrida%20Square!5e0!3m2!1sen!2sin!4v1733033965041!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoading(false)} // Hide the loader when iframe is loaded
        ></iframe>
      </div>
    </div>
  );
}

export default LocationsMap;

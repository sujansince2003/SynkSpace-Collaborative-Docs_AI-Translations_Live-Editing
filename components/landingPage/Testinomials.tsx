import React from "react";
import { Reviews } from "./Reviews";

const HowItWorks = () => {
  return (
    <section className="py-24 " id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by developers worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here&apos;s what some of our users have to say
          </p>
        </div>

        <Reviews />
      </div>
    </section>
  );
};

export default HowItWorks;

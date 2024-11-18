import React from "react";

import { experiences } from "../data";

const Experiences = () => {
  return (
    <section id="experiences" className="pb-12 lg:pb-32 bg-secondary">
      <div className="container mx-auto">
        {/* section title */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="section-title before:content-experiences relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            My Professional Journey
          </h2>
        </div>
        {/* item grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              className="bg-tertiary p-6 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              key={index}
            >
              {/* Image */}
              <a href={experience.href} className="relative">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-52 h-32 mb-6 rounded-lg border-2 border-accent object-cover"
                />
              </a>

              {/* Year */}
              <div className="text-accent text-center mb-6 text-[24px] font-bold">
                {experience.year}
              </div>
              {/* Title */}
              <h4 className="text-xl font-medium mb-2 hover:text-accent transition-colors duration-300">
                {experience.title}
              </h4>
              {/* Description */}
              <p className="text-gray-300">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;

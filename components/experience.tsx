"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Experience
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Professional journey and achievements in software development
          </p>
        </motion.div>
          {/* Timeline container */}
          <div className="relative max-w-6.1xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500/30 via-violet-500/30 to-blue-500/30" />

            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-16 last:mb-0 "
              >
                {/* Timeline dot */}
                <div className="absolute -left-2.5 md:left-1/2 transform md:-translate-x-1/2 -top-2 w-6 h-6 rounded-full border-2 border-violet-400 bg-black z-10">
                  <motion.div
                    className="absolute inset-[3px] rounded-full bg-violet-400"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 300, damping: 20 }}
                  />
                </div>

                {/* Card positioning - alternating left/right on larger screens */}
                <div
                  className={`relative md:w-[calc(50%-30px)] ml-8 md:ml-auto ${
                    index % 2 === 0 ? "md:mr-[calc(50%+30px)]" : "md:ml-[calc(50%+30px)]"
                  }`}
                >
                  {/* Card */}
                  <motion.div
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >

                    {/* Card content */}
                    <div className="relative h-full bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-lg">
                      {/* Header row */}
                      <div className="flex justify-between items-start mb-5">
                        <div>
                          <motion.h3
                            className="font-bold text-2xl bg-clip-text mb-1"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 + 0.1 }}
                          >
                            {experience.title}
                          </motion.h3>

                          <motion.div
                            className="flex items-center text-gray-200 font-medium text-lg"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 + 0.2 }}
                          >
                            <FaBriefcase className="mr-2 text-blue-400" />
                            {experience.company}
                          </motion.div>
                        </div>
                      </div>

                      {/* Meta information */}
                      <div className="flex flex-wrap gap-4 mb-5 text-gray-400 text-sm">
                        <motion.div
                          className="flex items-center"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 0.3 }}
                        >
                          <FaCalendarAlt className="mr-2 text-blue-400" />
                          {experience.date}
                        </motion.div>

                        <motion.div
                          className="flex items-center"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 0.4 }}
                        >
                          <FaMapMarkerAlt className="mr-2 text-blue-400" />
                          {experience.location}
                        </motion.div>
                      </div>

                      {/* Description */}
                      <motion.ul
                        className="space-y-3 text-gray-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        {experience.description.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + 0.5 + pointIndex * 0.1 }}
                            whileHover={{ x: 3 }}
                          >
                            <motion.span
                              className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-blue-400"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                delay: index * 0.2 + 0.6 + pointIndex * 0.1,
                              }}
                            />
                            <span className="flex-1">{point}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}

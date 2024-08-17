import React from "react";
import { useTheme } from "./themeContext";
import { FaUniversity, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const ExperienceAndEducation = () => {
  const { isDarkMode } = useTheme();

  const educationData = [
    {
      year: "2014 - 2019",
      education: "Secondary (6th-10th)",
      school: "Javahar Navodaya Vidhyalaya",
      university: "CBSE",
      location: "CK Dam,Dewas",
    },
    {
      year: "2019 - 2021",
      education: "Higher Secondary (11th-12th)",
      school: "Javahar Navodaya Vidhyalaya",
      university: "CBSE",
      location: "CK Dam,Dewas",
    },
    {
      year: "2021 - Present",
      education: "Bachelor of Technology in Computer Science",
      school: "Alpine Institute of Technology",
      university: "RGPV University",
      location: "Ujjain",
    },

    // Add more education cards here
  ];

  const experienceData = [
    {
      company: "AllSoft Infotech & Multimedia Pvt. Ltd.",
      role: "Web Developer Trainee",
      year: "Jun'2023 - Nov'2023",
      location:'Ujjain',
    },

    // Add more experience cards here
  ];

  return (
    <div id="education" className={`bg-background text-primary p-6`}>
      <h1 className="text-4xl font-bold text-center mb-8">
        Experience & Education
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`p-4 rounded-md shadow-lg border  ${
                  isDarkMode ? "bg-slate-900 hover:shadow-slate-700" : "bg-slate-100 hover:shadow-slate-200"
                } border-gray-300 `}
              >
                <div className="flex items-center">
                  <FaUniversity className="text-orange-500 dark:text-orange-400 mr-4" />
                  <h3 className="text-lg font-semibold">{edu.education}</h3>
                </div>
                <p className="text-sm">{edu.school}</p>
                <p className="text-sm">{edu.university}</p>
                <p className="text-sm flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-accent" />
                  {edu.location}
                </p>
                <p className="text-xs text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className={`p-4 rounded-md shadow-lg border border-gray-300 ${
                  isDarkMode ? "bg-slate-900" : "bg-slate-100"
                }`}
              >
                <div className="flex items-center">
                  <FaBriefcase className="text-secondary mr-4" />
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                </div>
                <p className="text-sm">{exp.role}</p>
                <p className="text-sm flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-accent" />
                  {exp.location}
                </p>

                <p className="text-xs text-gray-500">{exp.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAndEducation;

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ProjectCard from "../components/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  const { name } = useParams();
  const [club, setClub] = useState(null);
  const [projects, setProjects] = useState([]);
  const [selectedYear, setSelectedYear] = useState("ALL");

  useEffect(() => {
    fetch(`/api/clubs/${name}/projects`)
      .then((res) => res.json())
      .then((data) => {
        setClub(data.club);
        setProjects(data.projects || []);
      })
      .catch((err) => console.error(err));
  }, [name]);

  const years = [...new Set(projects.map((p) => p.year).filter(Boolean))].sort(
    (a, b) => b - a
  );

  const filteredProjects =
    selectedYear === "ALL"
      ? projects
      : projects.filter((p) => p.year === selectedYear);

  const groupedProjects = years.reduce((acc, year) => {
    acc[year] = filteredProjects.filter((p) => p.year === year);
    return acc;
  }, {});

  const scrollRefs = useRef({});

  const scroll = (year, direction) => {
    const container = scrollRefs.current[year];
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="projects-page">
        {/* Club Info */}
        {club && (
          <div className="club-info">
            <div className="club-text">
              <h1 className="club-name">{club.name}</h1>
              {club.description && (
                <>
                  <p className="club-desc-title">Description</p>
                  <p className="club-desc">{club.description}</p>
                </>
              )}
            </div>
            {club.logo && (
              <img
                src={club.logo}
                alt={`${club.name} Logo`}
                className="club-logo"
              />
            )}
          </div>
        )}

        {/* Year Filter */}
        <div className="year-filter">
          <button
            className={`year-btn ${selectedYear === "ALL" ? "active" : ""}`}
            onClick={() => setSelectedYear("ALL")}
          >
            ALL
          </button>
          {years.map((year) => (
            <button
              key={year}
              className={`year-btn ${selectedYear === year ? "active" : ""}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Projects by Year */}
        {Object.keys(groupedProjects)
          .sort((a, b) => b - a)
          .filter((year) => selectedYear === "ALL" || Number(year) === selectedYear)
          .map((year) => (
    <div key={year} className="year-section">
      <h2 className="year-title">{year}</h2>
      <div className="project-scroll-container">
        <button
          onClick={() => scroll(year, "left")}
          className="scroll-btn left"
        >
          <ChevronLeft />
        </button>

        <div
          ref={(el) => (scrollRefs.current[year] = el)}
          className="project-row"
        >
          {groupedProjects[year].map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        <button
          onClick={() => scroll(year, "right")}
          className="scroll-btn right"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  ))}


        {projects.length === 0 && (
          <p className="no-projects">No projects found for this club.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ProjectCard from "../components/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ProjectDetails.css";

export default function ProjectDetailsPage() {
  const { name, projectId } = useParams();
  const [project, setProject] = useState(null);
  const [otherProjects, setOtherProjects] = useState([]);
  const [message, setMessage] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch(`/api/clubs/${name}/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data.project || null);
        setOtherProjects(data.otherProjects || []);
        setMessage(data.message || "");
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
        setProject(null);
        setOtherProjects([]);
      });
  }, [name, projectId]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="pd-loading">Loading project...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="pd-page">
        <div className="pd-breadcrumbs">
          <Link to="/clubs" className="pd-bc-link">Clubs</Link>
          <span className="pd-sep"> &gt; </span>
          <Link to={`/clubs/${name}/projects`} className="pd-bc-link">{name}</Link>
          <span className="pd-sep"> &gt; </span>
          <span className="pd-bc-current">{project.name}</span>
        </div>

        <div className="pd-card">
          <div className="pd-card-left">
            <h1 className="pd-title">{project.name}</h1>

            <div className="pd-desc-label">Description</div>

            <p className="pd-description">
              {project.description || "No description provided for this project."}
            </p>
          </div>

          <div className="pd-card-right">
            <div className="pd-year-pill">{project.year || ""}</div>
            <div className="pd-image-wrap">
              <img
                src={project.image?.url || project.image }
                alt={project.name}
                className="pd-image"
              />
            </div>
          </div>
        </div>

        {/* Other projects row */}
        <section className="pd-other-section">
          <h2 className="pd-other-title">Other Projects in {project.year}</h2>

          {otherProjects && otherProjects.length > 0 ? (
            <div className="pd-other-scroll-wrapper">
              <button className="pd-scroll-btn left" onClick={() => scroll("left")}>
                <ChevronLeft />
              </button>

              <div className="pd-other-row" ref={scrollRef}>
                {otherProjects
                  .filter((p) => p && p._id)
                  .map((p) => (
                    <ProjectCard key={p._id} project={p} />
                  ))}
              </div>

              <button className="pd-scroll-btn right" onClick={() => scroll("right")}>
                <ChevronRight />
              </button>
            </div>
          ) : (
            <p className="pd-no-other">{message || `No other projects found for ${project.year}.`}</p>
          )}
        </section>
      </div>

      <Footer />
    </>
  );
}

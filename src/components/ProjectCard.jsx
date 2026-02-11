import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ProjectCard({ project }) {
  const { name } = useParams();

  // Handle undefined project prop
  if (!project) {
    return (
      <div className="bg-gray-900 p-4 rounded-2xl shadow-lg w-72 flex-shrink-0 text-center text-gray-400">
        Loading project...
      </div>
    );
  }

  const imageSrc =
    project?.image?.url || project?.image || "https://picsum.photos/400/300?random";

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg w-72 flex-shrink-0 hover:scale-105 transition-transform duration-200">
      {/* Project Image */}
      <img
        src={imageSrc}
        alt={project?.name || "Project"}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      {/* Project Title */}
      <h3 className="font-bold text-lg text-yellow-400">
        {project?.name || "Untitled Project"}
      </h3>

      {/* Short Description */}
      <p className="text-sm text-gray-300 mt-2 line-clamp-2 h-10 overflow-hidden">
        {project?.description || "No description available."}
      </p>

      {/* Details Button */}
      {project?._id && (
        <div className="flex justify-end mt-4">
          <Link
            to={`/clubs/${name}/projects/${project._id}`}
            className="px-4 py-1 rounded-full bg-yellow-400 text-black text-sm font-medium hover:bg-yellow-500 transition-colors"
          >
            Details
          </Link>
        </div>
      )}
    </div>
  );
}

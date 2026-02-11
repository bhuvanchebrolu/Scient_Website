const Club = require("../models/Club");
const Project = require("../models/Project");

exports.getProject = async (req, res) => {
  try {
    const { name, projectId } = req.params;

    // 1️⃣ Find club by name (case-insensitive)
    const club = await Club.findOne({
      name: { $regex: new RegExp(`^${name}$`, "i") },
    });

    if (!club) {
      return res.status(404).json({ error: "Club not found" });
    }

    // 2️⃣ Get the main project directly
    const project = await Project.findOne({ _id: projectId, club: club._id });

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // 3️⃣ Fetch other projects of same club and same year (excluding this one)
    const otherProjects = await Project.find({
      club: club._id,
      year: project.year,
      _id: { $ne: project._id },
    });

    // 4️⃣ Send data
    res.json({
      project,
      otherProjects,
      message:
        otherProjects.length === 0
          ? "No other projects found for this year."
          : undefined,
    });
  } catch (err) {
    console.error("Error fetching project details:", err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};


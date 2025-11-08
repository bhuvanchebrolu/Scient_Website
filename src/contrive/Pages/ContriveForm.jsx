import { useState } from "react";
import {
  Instagram,
  Linkedin,
  MessageCircle,
  QrCode,
  HelpCircle,
} from "lucide-react";

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    roll: "",
    branch: "",
    year: "",
    name: "",
    hostelName: "",
    roomNo: "",
    email: "",
    mobile: "",
    source: "",
    otherSource: "",
    teamSize: 1,
    members: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTeamSizeChange = (e) => {
    const size = parseInt(e.target.value) || 1;
    setFormData({
      ...formData,
      teamSize: size,
      members: Array(size - 1)
        .fill()
        .map(
          (_, i) =>
            formData.members[i] || {
              name: "",
              roll: "",
              branch: "",
              year: "",
            }
        ),
    });
  };

  const handleMemberChange = (index, field, value) => {
    const updated = [...formData.members];
    updated[index][field] = value;
    setFormData({ ...formData, members: updated });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.roll) newErrors.roll = "Roll number is required";
    if (!formData.branch) newErrors.branch = "Branch is required";
    if (!formData.year) newErrors.year = "Year of study is required";
    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.hostelName) newErrors.hostelName = "Hostel name is required";
    if (!formData.roomNo) newErrors.roomNo = "Room number is required";

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.source)
      newErrors.source = "Please select how you heard about Inventive";

    if (formData.source === "Other" && !formData.otherSource) {
      newErrors.otherSource = "Please specify other source";
    }

    if (!formData.teamSize || formData.teamSize < 1) {
      newErrors.teamSize = "Please enter team size";
    }

    formData.members.forEach((member, i) => {
      if (!member.name)
        newErrors[`member${i}_name`] = `Member ${i + 2} name required`;
      if (!member.roll)
        newErrors[`member${i}_roll`] = `Member ${i + 2} roll required`;
      if (!member.branch)
        newErrors[`member${i}_branch`] = `Member ${i + 2} branch required`;
      if (!member.year)
        newErrors[`member${i}_year`] = `Member ${i + 2} year required`;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contriveForm/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const message = await response.text();
        alert(message || "Form submitted successfully!");
        setFormData({
          roll: "",
          branch: "",
          year: "",
          name: "",
          hostelName: "",
          roomNo: "",
          email: "",
          mobile: "",
          source: "",
          otherSource: "",
          teamSize: 1,
          members: [],
        });
        setErrors({});
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert(
        "Network error. Please check if the server is running on port 3001."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative top-16 mb-16 bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-zinc-950 shadow-2xl rounded-2xl p-10 border border-yellow-500/30">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-3 text-center drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]">
          Contrive Form
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Submit your details below
        </p>

        {/* 🚨 Important Note Box */}
        <div className="border-2 rounded-xl border-yellow-500 bg-[#1a1a1a] p-4 mb-8 shadow-[0_0_20px_rgba(250,204,21,0.3)] animate-pulse-slow">
          <p className="text-sm md:text-base text-yellow-300 font-semibold text-center">
            ⚠️ <span className="text-yellow-400">Important:</span> First years
            can only team up with first years. This restriction does not apply
            to second or third years.
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Personal Details */}
          <div className="bg-zinc-900/60 rounded-xl p-6 shadow-md border border-zinc-800">
            <h2 className="text-xl font-semibold text-yellow-300 mb-4">
              Personal Details
            </h2>

            {/* Roll + Name */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-white mb-2">Roll Number</label>
                <input
                  type="text"
                  name="roll"
                  value={formData.roll}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter Roll Number"
                />
                {errors.roll && (
                  <p className="text-red-500 text-sm mt-1">{errors.roll}</p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
            </div>

            {/* Branch + Year */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-white mb-2">Branch</label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Select Branch</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Chemical Engineering">
                    Chemical Engineering
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Computer Science and Engineering">
                    Computer Science and Engineering
                  </option>
                  <option value="Electrical and Electronics Engineering">
                    Electrical and Electronics Engineering
                  </option>
                  <option value="Electronics and Communication Engineering">
                    Electronics and Communication Engineering
                  </option>
                  <option value="Instrumentation and Control Engineering">
                    Instrumentation and Control Engineering
                  </option>
                  <option value="Mechanical Engineering">
                    Mechanical Engineering
                  </option>
                  <option value="Metallurgical and Materials Engineering">
                    Metallurgical and Materials Engineering
                  </option>
                  <option value="Production Engineering">
                    Production Engineering
                  </option>
                </select>
                {errors.branch && (
                  <p className="text-red-500 text-sm mt-1">{errors.branch}</p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-white mb-2">Year of Study</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
                {errors.year && (
                  <p className="text-red-500 text-sm mt-1">{errors.year}</p>
                )}
              </div>
            </div>

            {/* Hostel + Room */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-white mb-2">Hostel Name</label>
                <input
                  type="text"
                  name="hostelName"
                  value={formData.hostelName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter Hostel Name"
                />
                {errors.hostelName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hostelName}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-white mb-2">Room Number</label>
                <input
                  type="text"
                  name="roomNo"
                  value={formData.roomNo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter Room Number"
                />
                {errors.roomNo && (
                  <p className="text-red-500 text-sm mt-1">{errors.roomNo}</p>
                )}
              </div>
            </div>

            {/* Email + Mobile */}
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <div className="flex-1">
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-white mb-2">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter Mobile Number"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>
          </div>

          {/* Source Section */}
          <div className="bg-zinc-900/60 rounded-xl p-6 shadow-md border border-zinc-800">
            <label className="text-xl font-semibold text-yellow-300 mb-4 block">
              How did you get to know about Contrive?
            </label>

            <div className="flex flex-wrap gap-3">
              {[
                { label: "Instagram", icon: <Instagram size={18} /> },
                { label: "Linkedin", icon: <Linkedin size={18} /> },
                { label: "WhatsApp Groups", icon: <MessageCircle size={18} /> },
                { label: "Offline QR Codes", icon: <QrCode size={18} /> },
                { label: "Other", icon: <HelpCircle size={18} /> },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setFormData({ ...formData, source: label })}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all
                    ${
                      formData.source === label
                        ? "bg-yellow-400 text-black border-yellow-400"
                        : "bg-black text-white border-yellow-400/70 hover:bg-yellow-500 hover:text-black"
                    }`}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>

            {formData.source === "Other" && (
              <input
                type="text"
                name="otherSource"
                placeholder="Please specify..."
                value={formData.otherSource}
                onChange={handleChange}
                className="mt-3 w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            )}

            {errors.source && (
              <p className="text-red-500 text-sm mt-2">{errors.source}</p>
            )}
            {errors.otherSource && (
              <p className="text-red-500 text-sm mt-2">{errors.otherSource}</p>
            )}
          </div>

          {/* Team Details (kept design, removed project/problem fields) */}
          <div className="bg-zinc-900/60 rounded-xl p-6 shadow-md border border-zinc-800">
            <h2 className="text-xl font-semibold text-yellow-300 mb-4">
              Team Details
            </h2>

            {/* Team Size */}
            <div className="mb-4">
              <label className="block text-white mb-2">Team Size</label>
              <input
                type="number"
                name="teamSize"
                min="1"
                max="10"
                value={formData.teamSize}
                onChange={handleTeamSizeChange}
                className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.teamSize && (
                <p className="text-red-500 text-sm mt-1">{errors.teamSize}</p>
              )}
            </div>

            {/* Other Members */}
            {formData.members.map((member, index) => (
              <div
                key={index}
                className="mb-6 p-4 border-2 border-black rounded-lg bg-black shadow-md"
              >
                <h3 className="font-semibold text-lg mb-3 text-white">
                  Member {index + 2} Details
                </h3>

                {/* Name */}
                <div className="mb-3">
                  <label className="block mb-1 text-white">Name</label>
                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) =>
                      handleMemberChange(index, "name", e.target.value)
                    }
                    className="w-full p-2 border border-yellow-400 rounded bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter name"
                  />
                  {errors[`member${index}_name`] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[`member${index}_name`]}
                    </p>
                  )}
                </div>

                {/* Roll */}
                <div className="mb-3">
                  <label className="block mb-1 text-white">Roll Number</label>
                  <input
                    type="text"
                    value={member.roll}
                    onChange={(e) =>
                      handleMemberChange(index, "roll", e.target.value)
                    }
                    className="w-full p-2 border border-yellow-400 rounded bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter roll number"
                  />
                  {errors[`member${index}_roll`] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[`member${index}_roll`]}
                    </p>
                  )}
                </div>

                {/* Branch */}
                <div className="mb-3">
                  <label className="block mb-1 text-white">Branch</label>
                  <select
                    value={member.branch}
                    onChange={(e) =>
                      handleMemberChange(index, "branch", e.target.value)
                    }
                    className="w-full p-2 border border-yellow-400 rounded bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Select Branch</option>
                    <option value="Architecture">Architecture</option>
                    <option value="Chemical Engineering">
                      Chemical Engineering
                    </option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Computer Science and Engineering">
                      Computer Science and Engineering
                    </option>
                    <option value="Electrical and Electronics Engineering">
                      Electrical and Electronics Engineering
                    </option>
                    <option value="Electronics and Communication Engineering">
                      Electronics and Communication Engineering
                    </option>
                    <option value="Instrumentation and Control Engineering">
                      Instrumentation and Control Engineering
                    </option>
                    <option value="Mechanical Engineering">
                      Mechanical Engineering
                    </option>
                    <option value="Metallurgical and Materials Engineering">
                      Metallurgical and Materials Engineering
                    </option>
                    <option value="Production Engineering">
                      Production Engineering
                    </option>
                  </select>
                  {errors[`member${index}_branch`] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[`member${index}_branch`]}
                    </p>
                  )}
                </div>

                {/* Year */}
                <div className="mb-1">
                  <label className="block mb-1 text-white">Year</label>
                  <select
                    value={member.year}
                    onChange={(e) =>
                      handleMemberChange(index, "year", e.target.value)
                    }
                    className="w-full p-2 border border-yellow-400 rounded bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Select Year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                  </select>
                  {errors[`member${index}_year`] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[`member${index}_year`]}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition duration-300"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

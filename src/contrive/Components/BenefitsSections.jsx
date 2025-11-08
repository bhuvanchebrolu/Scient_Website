import React from "react";
import "./BenefitsSections.css";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Mentorship and Guidance",
      desc: "Participants receive direct guidance from accomplished members of the innovative community here at NIT Trichy.",
      icon: "fas fa-chalkboard-teacher",
    },
    {
      id: 2,
      title: "Opportunity to be Industrial Innovators",
      desc: "Contrive provides participants with the unique opportunity to work on industrially relevant problem statements.",
      icon: "fas fa-industry",
    },
    {
      id: 3,
      title: "Pre-Placement Interviews (PPI)",
      desc: "Outstanding performance and innovation may open doors to pre-placement interviews or offers from reputed companies.",
      icon: "fas fa-briefcase",
    },
    {
      id: 4,
      title: "Exciting Cash Prizes",
      desc: "Top-performing teams will be awarded attractive cash prizes, certificates, and trophies in recognition of their innovative and impactful solutions.",
      icon: "fas fa-trophy",
    },
    {
      id: 5,
      title: "Intellectual Property (IP) Support",
      desc: "To encourage innovation and ownership, participants will receive complete intellectual property support.",
      icon: "fas fa-file-signature",
    },
    {
      id: 6,
      title: "Exclusive Merchandise",
      desc: "Every participant will receive limited-edition Contrive 2025 merchandise as a token of participation and innovation.",
      icon: "fas fa-gift",
    },
  ];

  // Divide into two columns for layout symmetry
  const leftColumn = benefits.slice(0, Math.ceil(benefits.length / 2));
  const rightColumn = benefits.slice(Math.ceil(benefits.length / 2));

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-heading">
          <span className="benefits-highlight">Contrive</span> Benefits
        </h2>

        <div className="benefits-grid">
          <div className="benefits-column">
            {leftColumn.map((b) => (
              <div key={b.id} className="benefit-card">
                <div className="benefit-icon">
                  <i className={b.icon}></i>
                </div>
                <div className="benefit-text">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="benefits-column">
            {rightColumn.map((b) => (
              <div key={b.id} className="benefit-card">
                <div className="benefit-icon">
                  <i className={b.icon}></i>
                </div>
                <div className="benefit-text">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

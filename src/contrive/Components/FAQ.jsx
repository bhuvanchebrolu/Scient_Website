import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What is Contrive?",
    answer:
      "Contrive is the flagship product development mentorship program of NIT Trichy. It is designed to help students gain hands-on experience in developing real-world engineering solutions through structured mentorship, technical training, and guided project execution.",
  },
  {
    question: "Who can participate?",
    answer:
      "Contrive is open to all undergraduate students from any engineering discipline who are eager to innovate and explore the process of product development.",
  },
  {
    question: "What is the duration of the program?",
    answer:
      "Contrive runs for approximately two months — from the last week of November to the third week of January. The schedule includes mentorship sessions, design reviews, and final presentations spread across this period.",
  },
  {
    question: "Is there any registration or participation fee?",
    answer:
      "No. Contrive is completely free of cost. The entire program, including mentorship and access to all sessions, is provided without any participation fee.",
  },
  {
    question: "Who will be the mentors?",
    answer:
      "Mentorship will be provided by expert members from the third year of Designers’ Consortium, NIT Trichy’s Technical Product Design and Innovation club. These mentors bring valuable technical expertise and experience from prior industry-oriented projects, ensuring participants receive practical and high-quality guidance throughout the program.",
  },
  {
    question: "What are the benefits of participating?",
    answer:
      "Participants gain exposure to real-world product development, mentorship from trained experts, and the opportunity to enhance both technical and creative skills. Top-performing teams will also receive cash prizes, certificates, and pre-placement interview (PPI) opportunities.",
  },
  {
    question: "What is IP support and how does it work?",
    answer:
      "Projects with patentable potential will receive intellectual property (IP) assistance, including guidance on documentation, filing, and protecting innovative ideas under institutional or national frameworks.",
  },
  {
    question: "What kind of recognition will participants receive?",
    answer:
      "Participants will earn certificates, exclusive Contrive 2025 merchandise, and the opportunity to present their projects to industry professionals and NIT Trichy’s innovation ecosystem. Exceptional projects will receive special recognition and may be considered for industrial collaboration or implementation.",
  },
  {
    question: "How do I register?",
    answer:
      "Registration details and deadlines will be shared through the official Contrive website. Participants can register individually or as a team through the website.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="faq-section">
      <div className="faq-bg"></div>

      <div className="faq-container">
        <div className="faq-header">
          <h2 className="glow-text">Frequently Asked Questions</h2>
          <p className="subtitle">
            Everything you need to know about Contrive 2025
          </p>
          <div className="header-underline"></div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span
                  className={`arrow ${activeIndex === index ? "rotate" : ""}`}
                >
                  ▼
                </span>
              </button>
              <div
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? "400px" : "0px",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

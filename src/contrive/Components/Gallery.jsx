import React from "react";
import collabImage from "../assets/contrive-collab.jpg";
import designImage from "../assets/contrive-design.jpg";
import prototypeImage from "../assets/contrive-prototype.jpg";
import testingImage from "../assets/contrive-testing.jpg";
import showcaseImage from "../assets/contrive-showcase.jpg";
import "./Gallery.css";

const images = [
  { src: collabImage, alt: "Team collaboration at CONTRIVE" },
  { src: designImage, alt: "CAD Design and Simulation" },
  { src: prototypeImage, alt: "3D Printing and Prototyping" },
  { src: testingImage, alt: "Testing and Validation" },
  { src: showcaseImage, alt: "Final Showcase Event" },
];

const EventGallery = () => {
  return (
    <section className="event-gallery">
      <h2 className="gallery-heading">Event Gallery</h2>

      <div className="gallery-top">
        <div className="gallery-card wide-card">
          <img src={images[0].src} alt={images[0].alt} className="gallery-image" />
        </div>
        <div className="gallery-card">
          <img src={images[1].src} alt={images[1].alt} className="gallery-image" />
        </div>
        
      </div>

      <div className="gallery-bottom">
        <div className="gallery-card">
          <img src={images[2].src} alt={images[2].alt} className="gallery-image" />
        </div>
        <div className="gallery-card">
          <img src={images[3].src} alt={images[3].alt} className="gallery-image" />
        </div>
        <div className="gallery-card">
          <img src={images[4].src} alt={images[4].alt} className="gallery-image" />
        </div>
      </div>
    </section>
  );
};

export default EventGallery;

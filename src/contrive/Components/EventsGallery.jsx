import React from "react";
import "./EventsGallery.css";

const PastEventsGallery = () => {
  const events = [
  { 
    id: 1, 
    title: "CONTRIVE'24 Opening Ceremony", 
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop" 
  },
  { 
    id: 2, 
    title: "Innovation Workshop", 
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop" 
  },
  { 
    id: 3, 
    title: "Team Presentations", 
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop" 
  },
  { 
    id: 4, 
    title: "Mentorship Sessions", 
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop" 
  },
  { 
    id: 5, 
    title: "Finals & Awards", 
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop" 
  },
  { 
    id: 6, 
    title: "Winners Celebration", 
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop" 
  }
];


  return (
    <section className="past-events-section">
      <div className="past-events-container">
        <h2 className="past-events-title">Past Events</h2>
        <div className="past-events-grid">
          {events.map((event, index) => (
           <div className="past-event-item" key={index} data-title={event.title}>
  <img src={event.src} alt={event.title} className="past-event-image" />
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsGallery;

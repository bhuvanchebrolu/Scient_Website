
// export default About;
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './About.css';
import Footer from '../components/footer';

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      <label className="label-info">{data.author}</label>
      <span className="circle" />
    </div>
  </div>
);

const SimpleTimeLine = ({ timelineData }) => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1, // When 10% of the element is in view
      }
    );

    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    // Clean up the observer when the component unmounts
    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );
};

// About page component
const     About = () => {
    const timelineData = [
        {
            text: "At their Silver Jubilee, the 1990’s batch of REC, came up with a vision to further support and nurture the development of technology and innovation at NITT. SCIEnT was founded as a means for alumni to contribute to their alma mater. On the 24th of December of 2015, the SCIEnT Facility was inaugurated by Mr. Uma Maheswaran, Mission Director, GSLV, ISRO in the presence of Dr. Sundarrajan, then Director of NIT, Trichy.",
            date: "2015",
            category: {
                tag: "Genesis of SCIEnT",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "The annual project showcase event, called \"Open House,\" was initiated in 2018. SCIEnT hosted the event, where multiple technical clubs and students displayed their projects. The showcase featured a credited judging panel and an attractive cash prize, motivating individuals to present their best work.",
            date: "2018",
            category: {
                tag: "Launch of 'Open House' Project Showcase",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "During the lockdown period, when physical gatherings were restricted, the focus shifted to online platforms. Guest lectures, workshops, and informative tech series were organised across various social media platforms. These virtual events helped keep the tech community engaged and connected during the challenging times.",
            date: "2020",
            category: {
                tag: "Transitioning Online due to Lockdown",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "After the lockdown, in collaboration with the Technical Council a 48-hour hackathon called 'Transfinitte' was organised. The hackathon aimed to bring back the glory days of technical innovation on campus.",
            date: "2022",
            category: {
                tag: "Return to Campus - 'Transfinitte' Hackathon",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "In collaboration with E-Cell, we organised an event called 'E-Summit,' focusing on entrepreneurship. Renowned guest speakers and panel discussions were featured over a span of three days.",
            date: "2023",
            category: {
                tag: "'E-Summit'",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "The annual showcase event, 'Open House,' made a comeback in collaboration with Pragyan at Golden Jubilee Convention Hall (GJCH). The display included the work of tech clubs from the past year and 4 exhibits from Pragyan team. This event provided an opportunity for students to exhibit their technological achievements and creations.",
            date: "2023",
            category: {
                tag: "'Open House' in collaboration with Pragyan",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "TransfiNITTe[the flagship hackathon of NIT Tiruchirappalli] in collaboration with the Technical Council, and Genesis in collaboration with IIC.",
            date: "2023",
            category: {
                tag: "'TransFinitte' and 'Genesis",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "Pragyan, in collaboration with SCIEnT, presents another edition of Open House ’24. Witnessing the best inventions, and great opportunity to showcase innovative projects and creations.",
            date: "2024",
            category: {
                tag: "Open House",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "SCIEnT proudly presents its annual Project Showcase, a chance to witness groundbreaking engineering marvels by NIT Trichy’s students in the SCIEnT Lab which was followed by the Annual Day Celebrations.",
            date: "2024",
            category: {
                tag: "Annual Day",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
          text:"This is a project showcase event. It features all the technical clubs presenting their projects, which are then individually judged by professors.",
          date:"August 2024",
          category:{
            tag:"Open Day",
            color:"#28282B"
          }
        },
        {
          text:"This is the flagship 42-hour hackathon , conducted by the Technical Council in association with SCIENT. The event sees participation from over 100 teams who collaborate to build innovative software and hardware projects.",
          date:"August 2024",
          category:{
            tag:"TransfiNITTE",
            color:"#28282B"
          }
        },
        {
          text:"This is a product design competition organized in collaboration with the Designer Consortium club of NIT Trichy. The 2024-2025 event was a 'Campus Development Edition' with prizes worth ₹7K. It was open to students of all years and offered participants the chance to use fabrication facilities , along with opportunities for publishing, patenting , and receiving 'Fully Funded Project Development and Implementation'.",
          date:"October 2024",
          category:{
            tag:"Contrive",
            color:"#28282B"
          }
        },
        {
          text:"On October 22, 2024, a team of 12 SCIENT students, accompanied by the SCIENT Manager, Mr. Sivanesan, visited the Centre for Innovation (CFI) at the Indian Institute of Technology Madras (IITM). The team had the opportunity to interact with several student teams at CFI, including ABHIYAAN, AGNIRATH, ABHYUDAY, ANVESHAK, AVISHKAR HYPERLOOP, ENVISAGE, NIRMAAN, and RAFTAR RACING. The visit was described as 'eye-opening' and helped the team better understand the scope and potential of a student-run innovation lab.",
          date:"October 2024",
          category:{
            tag:"CFI Visit",
            color:"#28282B"
          }
        },
        {
          text:"This is an initiative focused on 'CONNECT-ing students & faculties on multi-disciplinary projects'. The program's goal is to reach out to professors to identify project requirements and then match interested students with those on-campus projects. Its mission is to bridge the gap between students and faculty from various disciplines to foster an interdisciplinary environment.",
          date:"December 2024",
          category:{
            tag:"CONNECT Program",
            color:"#28282B"
          }
        },
        {
          text:"This is a two-day exhibition held during Pragyan, NIT Trichy's annual techno-managerial fest. During the event, students showcase the academic projects they have developed throughout the year in their tech clubs and departments. It serves as a platform for students to present their work to faculty, investors, and the wider community, which could potentially lead to real-world implementation.",
          date:"December 2024",
          category:{
            tag:"Openhouse",
            color:"#28282B"
          }
        },
        {
          text:"The official SCIENT website, scient.nitt.edu, was launched. Its primary aim is to centralize information and improve accessibility for all student-led initiatives under SCIENT. Key features of the website include a Room Booking Portal for managing club meeting rooms, an Inventory Database listing available equipment and hardware, and Project and Event Showcases.",
          date:"January 2025 ",
          category:{
            tag:"SCIENT Website Launch",
            color:"#28282B"
          }
        },
        {
          text:"This event was focused on allowing participants to explore the workspace, advanced tools, and various projects that are 'shaping the future'.",
          date:"February 2025 ",
          category:{
            tag:"Facility Visit",
            color:"#28282B"
          }
        },
        {
          text:"A three-day event held from April 3rd-5th , this workshop provided practical, hands-on learning experiences across various domains. The workshops included topics such as 3D Printing, Lathe operation, Welding, and Drones. All participants were given a chance to work hands-on with the equipment and received a certificate of participation.",
          date:"April  2025 ",
          category:{
            tag:"Workshop",
            color:"#28282B"
          }
        },
        {
          text:"This initiative, proposed by alumna Dr. Sangeetha, aims to introduce Class 6 students of REC Middle School to the basics of robotics in collaboration with Apeksha. The session will offer a hands-on learning experience using LEGO WeDo 2.0 educational kits generously provided by Dr. Sangeetha. Facilitated by the SCIEnT team, the workshop is designed to ignite curiosity and inspire young minds toward innovation and technology.",
          date:"July 2025 ",
          category:{
            tag:"ROBOTICS AWARENESS PROGRAM",
            color:"#28282B"
          }
        },
        {
          text:"A major milestone — the official launch of the SCIENt App! Designed to simplify operations, the app introduces key features like room booking, inventory tracking, and facility access management. It marks a step toward digital transformation, making SCIEnT’s resources and systems more accessible to the NIT Trichy community.",
          date:"August 2025",
          category:{
            tag:"APP LAUNCH",
            color:"#28282B"
          }
        },
        {
          text:"The SCIEnT team visited the Centre for Innovation (CFI) at IIT Madras to explore its innovation ecosystem. The visit provided valuable insights into collaborative ideation, research culture, and project incubation. It served as an inspiration for nurturing a similar environment of creativity and experimentation at NIT Trichy.",
          date:"September 2025",
          category:{
            tag:"CFI VISIT",
            color:"#28282B"
          }
        },
        {
          text:"The first cohort of INVENTIVE—a semester-long innovation journey—was launched in collaboration with Makers's Bhavan's  Vishwakarma awards. This program empowers participants to transform raw ideas into impactful prototypes and patents. Through expert mentorship, cutting-edge resources, and a collaborative network, students gain the opportunity to Identify real-world challenges,  Build and test solutions, Access incubation and patent support and Connect with faculty, alumni, and industry professionals",
          date:"September 2025",
          category:{
            tag:"INVENTIVE × VISHWAKARMA",
            color:"#28282B"
          }
        },
        {
          text:"The Orientation Exhibition served as an introductory platform for freshmen to explore SCIEnT’s vision, ongoing projects, and innovative ecosystem. It encouraged new students to engage in interdisciplinary collaboration and become active contributors to the institute’s culture of innovation.",
          date:"September 2025",
          category:{
            tag:"ORIENTATION EXHIBITION",
            color:"#28282B"
          }
        },
        {
          text:"SCIEnT proudly hosted the Smart India Hackathon (SIH) Final Exhibition, showcasing the culmination of months of innovation and teamwork. Students presented their prototypes and solutions developed for real-world industry and societal problems, reflecting the spirit of creativity and technical excellence at NIT Trichy.",
          date:"October 2025",
          category:{
            tag:"SIH FINAL EXHIBITION",
            color:"#28282B"
          }
        },
    ];;
    

  return (
    <div>
      <Navbar/>
      <h1>About Page</h1>
      <SimpleTimeLine timelineData={timelineData} />
      <Footer />
    </div>
  );
};

export default About;

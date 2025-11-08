import React from "react";

const timelineEvents = [
  {
    title: "Registration",
    date: "8th Nov",
    content: "Open registration for all participants",
  },
  {
    title: "Registration Closes",
    date: "17th - 22nd Nov",
    content: "Final deadline for team registration",
  },
  {
    title: "Onboarding & PS Release",
    date: "23rd Nov",
    content: "Welcome session and problem statement release",
  },
  {
    title: "Mentor Allocation",
    date: "24th Nov",
    content: "Teams assigned to expert mentors",
  },
  {
    title: "Phase 1: Background Research",
    date: "24th - 30th Nov",
    content: "Deep dive into problem understanding and existing solutions",
  },
  {
    title: "Phase 2: Ideation",
    date: "1st - 3rd Dec",
    content: "Brainstorm and develop innovative solutions",
  },
  {
    title: "Phase 3: Simulation (PoC)",
    date: "3rd - 14th Dec",
    content: "Create simulation models to validate your concept",
  },
  {
    title: "Phase 4: Prototyping",
    date: "Dec - Jan",
    content:
      "1st Years: 5th Jan - 14th Jan | Others: 15th Dec - 21st Dec",
  },
  {
    title: "Phase 5: Testing",
    date: "Jan",
    content:
      "1st Years: 1st - 10th Jan | Others: 4th Jan - 14th Jan",
  },
];

const Timeline = () => {
  return (
    <section className="relative py-20 flex flex-col items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl bottom-10 right-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Enhanced Header */}
      <div className="text-center relative z-10 mb-20">
        <h2
          className="text-5xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(250,204,21,0.4)] inline-block relative group"
        >
          Timeline
          <span className="absolute left-1/2 bottom-[-8px] w-0 h-[3px] bg-yellow-400 transition-all duration-500 group-hover:w-[60%] group-hover:left-[20%] rounded-full"></span>
        </h2>
        <p className="text-lg md:text-xl text-yellow-300/80 mt-6 animate-fade-in">
          From idea to innovation — track your progress through each phase
        </p>
      </div>

      {/* Timeline events */}
      <div className="space-y-16 w-full max-w-6xl relative z-10">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-400 to-transparent"></div>

        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex w-full items-center justify-${
                isLeft ? "start" : "end"
              } relative`}
            >
              {/* Glowing dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_20px_4px_rgba(250,204,21,0.8)]"></div>

              {/* Card */}
              <div
                className={`w-[45%] bg-[#0f172a] border-2 border-yellow-400 rounded-xl p-5 shadow-lg text-white transition-transform duration-300 hover:scale-105 ${
                  isLeft ? "mr-auto ml-4" : "ml-auto mr-4"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-extrabold text-yellow-400">
                    {event.title}
                  </h3>
                  <span className="bg-yellow-400/20 text-yellow-300 border border-yellow-400 rounded-full px-3 py-1 text-xs font-extrabold w-fit">
                    {event.date}
                  </span>
                </div>
                <p className="text-lg text-gray-300 mt-2">{event.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Note section */}
      <div className="border-2 border-[#6c5b13] bg-[#111420] rounded-lg p-6 w-[70%] md:w-1/2 mt-20 relative z-10 shadow-[0_0_30px_rgba(250,204,21,0.2)]">
        <h1 className="text-3xl text-yellow-400 font-extrabold mb-4">Note</h1>
        <p className="text-md text-yellow-400 font-medium mb-2">
          • 1st-year members may take a study break from <span className="font-bold">15th Dec to 5th Jan</span> for their end-semester examinations, while 2nd-year members can avail their break from <span className="font-bold">22nd December to 5th January.</span>
        </p>
        <p className="text-md text-yellow-400 font-medium">
          • <span className="font-bold">Requirement submission deadline: 11th December 2025 (strict deadline — ensure all submissions are completed before this date).</span>{" "}
        </p>
      </div>
    </section>
  );
};

export default Timeline;

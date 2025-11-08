import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contriveForm");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto animate-[slideUp_1s_ease-out]">
          {/* Main Title */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tight text-center relative">
            {"CONTRIVE'25".split("").map((char, index) => (
              <span
                key={index}
                className={`inline-block animate-[fadeInScale_0.8s_ease-out_${index * 0.1}s] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(234,179,8,0.5)]`}
              >
                {char}
              </span>
            ))}
          </h1>

          {/* About Section */}
          <div className="relative rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-sm bg-gradient-to-br from-yellow-500/10 via-black/50 to-yellow-600/10 border-2 border-yellow-500/30 shadow-[0_0_50px_rgba(234,179,8,0.3)] animate-[fadeIn_1.2s_ease-out_0.5s_both] hover:border-yellow-400/50 hover:shadow-[0_0_80px_rgba(234,179,8,0.5)] transition-all duration-500 group">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-yellow-400/60 rounded-tl-3xl group-hover:border-yellow-300 transition-colors"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-yellow-400/60 rounded-tr-3xl group-hover:border-yellow-300 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-yellow-400/60 rounded-bl-3xl group-hover:border-yellow-300 transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-yellow-400/60 rounded-br-3xl group-hover:border-yellow-300 transition-colors"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400 text-center [text-shadow:0_0_30px_rgba(234,179,8,0.6)]">
              About CONTRIVE'25
            </h2>

            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed text-justify">
              Contrive is the flagship product development program jointly
              conducted by <span className="text-yellow-400 font-semibold">SCIEnT  – the Innovation Hub of NIT Trichy </span>– and{" "}
              <span className="text-yellow-400 font-semibold">Designers' Consortium – the Technical Product Design and
              Innovation Club of NIT Trichy.</span>
              The program is crafted to ignite innovation and cultivate
              technical excellence among aspiring engineers. Participants engage
              with real-world problem statements that push the boundaries of
              creativity, analytical thinking, and engineering insight.
            </p>

            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed text-justify">
              Through the guidance of experienced mentors and collaboration with
              industry professionals, students navigate every stage of product
              development — from ideation and conceptualization to prototyping
              and validation. The initiative emphasizes not just technical
              mastery, but also teamwork, communication, and project management,
              ensuring a well-rounded learning experience.
              Over several weeks, Contrive transforms participants into capable
              innovators who bridge the gap between theory and practice,
              emerging with hands-on experience, a deep understanding of the
              innovation pipeline, and the confidence to tackle real-world
              engineering challenges.
            </p>
          </div>

          {/* Register Button */}
          <div className="flex justify-center">
            <button
              className="group relative px-12 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/50 focus:outline-none focus:ring-4 focus:ring-yellow-400/30"
              onClick={handleClick}
            >
              <span className="relative z-10 tracking-wide">REGISTER NOW</span>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl group-hover:bg-yellow-400/40 transition-all duration-300 -z-10"></div>

              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex items-start justify-center p-2 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
          <div className="w-1 h-3 bg-yellow-400 rounded-full animate-[scrollPulse_2s_ease-in-out_infinite] shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
        </div>
      </div>

      {/* Local animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.5) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes scrollPulse {
          0%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

import { useEffect, useRef } from "react";

const PageWrapper = ({ children }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight
      );
    };
    resize();
    window.addEventListener("resize", resize);

    const drops = [];
    const dropCount = 100;
    let globalWind = 0; // global wind direction
    const windChange = 0.001; // how fast wind direction changes

    class Drop {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.length = Math.random() * 20 + 20;
        this.speed = Math.random() * 3 + 2;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.width = Math.random() * 2 + 0.8;
        this.localWind = (Math.random() - 0.5) * 0.5; // per-drop variation
      }

      update() {
        this.y += this.speed;
        this.x += this.localWind + globalWind;

        if (
          this.y > canvas.height + this.length ||
          this.x < -50 ||
          this.x > canvas.width + 50
        ) {
          this.reset();
        }
      }

      draw() {
        const gradient = ctx.createLinearGradient(
          this.x,
          this.y,
          this.x + (this.localWind + globalWind) * 4,
          this.y + this.length
        );
        gradient.addColorStop(0, `rgba(255, 215, 0, ${this.opacity})`);
        gradient.addColorStop(1, "rgba(255, 215, 0, 0)");

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x + (this.localWind + globalWind) * 4,
          this.y + this.length
        );
        ctx.shadowBlur = 35;
        ctx.shadowColor = "rgba(255, 215, 0, 1)";
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < dropCount; i++) {
      drops.push(new Drop());
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Slowly change wind direction for a natural flow
      globalWind = Math.sin(Date.now() * windChange) * 1.2;

      drops.forEach((d) => {
        d.update();
        d.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Golden drizzle canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PageWrapper;

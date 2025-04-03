"use client";

import { Button, Heading } from "@medusajs/ui";
import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [gradientPosition, setGradientPosition] = useState<number>(0);
  const [particlePositions, setParticlePositions] = useState<
    { top: string; left: string; duration: string; size: string; opacity: string }[]
  >([]);

  useEffect(() => {
    // Update gradient angle every 50ms
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Generate particles dynamically
    if (typeof window !== "undefined") {
      const positions = Array.from({ length: 80 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 3 + 2}s`,
        size: `${Math.random() * 2 + 1}px`, // Random size between 1px and 3px
        opacity: `${Math.random() * 0.5 + 0.3}`, // Random opacity between 0.3 and 0.8
      }));
      setParticlePositions(positions);
    }
  }, []);

  return (
    <div className="h-[100vh] w-full border-b border-gray-300 relative flex items-center justify-center text-center overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          backgroundImage: `linear-gradient(${gradientPosition}deg, #0f172a, #1e293b, #334155)`,
          backgroundSize: "200% 200%",
        }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-full h-full absolute top-0 left-0">
          {particlePositions.map((pos, i) => (
            <span
              key={i}
              className="absolute bg-white rounded-full animate-float"
              style={{
                top: pos.top,
                left: pos.left,
                width: pos.size,
                height: pos.size,
                opacity: pos.opacity,
                animationDuration: pos.duration,
              }}
            ></span>
          ))}
        </div>
      </div>

      {/* Overlay Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 p-6">
        {/* Store Name & Tagline */}
        <span>
          <Heading
            level="h1"
            className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg"
          >
            🏆 ShopMitra - Your Ultimate Sports Destination!
          </Heading>
          <Heading
            level="h2"
            className="text-xl sm:text-2xl text-gray-200 mt-3 drop-shadow-md"
          >
            Play Hard, Shop Smart!
          </Heading>
        </span>

        {/* Call-to-Action Button */}
        <a href="http://localhost:8000/dk/store" >
          <Button
            variant="secondary"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
          >
            View Shopping Room
          </Button>
        </a>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 6s infinite linear;
        }

        @keyframes float {
          0% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-10px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 0.3; }
        }
        .animate-float {
          animation: float 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;

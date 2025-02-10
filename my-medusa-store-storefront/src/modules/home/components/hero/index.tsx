import { Button, Heading } from "@medusajs/ui";

const Hero = () => {
  return (
    <div className="h-[100vh] w-full border-b border-gray-300 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 relative flex items-center justify-center text-center">
      {/* Overlay Effect for Better Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 p-6">
        {/* Store Name & Tagline */}
        <span>
          <Heading
            level="h1"
            className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg"
          >
            🏆 Game On India - Your Ultimate Sports Destination!
          </Heading>
          <Heading
            level="h2"
            className="text-xl sm:text-2xl text-gray-200 mt-3 drop-shadow-md"
          >
            Play Hard, Shop Smart!
          </Heading>
        </span>

        {/* Call-to-Action Button */}
        <a href="#" target="_blank">
          <Button
            variant="secondary"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
          >
            View Shopping Room
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;

import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleHeartClick = () => {
    setIsRevealed(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center" style={{ backgroundColor: "#E83C74" }}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          {!isRevealed ? (
            <button
              onClick={handleHeartClick}
              className="animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-transform hover:scale-110 focus:outline-none"
              aria-label="Click to reveal message"
            >
              <Heart className="h-32 w-32 text-white" />
            </button>
          ) : (
            <div className="animate-fade-in space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                FIND YOUR NEW CRUSH -- OR FRIEND
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Click below to find your perfect match
              </p>
              <Button 
                className="bg-white text-[#E83C74] hover:bg-white/90 text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Find Your Match
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
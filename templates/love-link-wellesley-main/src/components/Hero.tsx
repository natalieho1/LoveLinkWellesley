import { Heart } from "lucide-react";

const Hero = () => {
  const handleHeartClick = () => {
    window.location.href = "questionsUI.html";
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center" style={{ backgroundColor: "#E83C74" }}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <button
            onClick={handleHeartClick}
            className="animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-transform hover:scale-110 focus:outline-none"
            aria-label="Click to reveal message"
          >
            <Heart className="h-32 w-32 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
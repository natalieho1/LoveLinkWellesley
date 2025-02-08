import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-valentine-purple" />
            <span className="text-xl font-semibold text-gray-800">
              Love Link 
            </span>
          </div>
          <p className="text-gray-600 text-center mb-4">
            For Wellesley sibs by Wellesley sibs
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
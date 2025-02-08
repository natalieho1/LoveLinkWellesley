import { Heart, Shield, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Wellesley Exclusive",
    description: "Connect with fellow students who share your college experience",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Safe & Secure",
    description: "Verified profiles and secure messaging for peace of mind",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Meaningful Connections",
    description: "Focus on compatibility and genuine relationships",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Special Events",
    description: "Exclusive dating events and mixers for members",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-valentine-light-purple/20 to-valentine-pink/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4 text-valentine-purple">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Create Your Profile",
    description: "Sign up with your Wellesley email and create a unique profile that shows your authentic self.",
  },
  {
    title: "Find Your Matches",
    description: "Our algorithm considers your interests, values, and preferences to suggest compatible matches.",
  },
  {
    title: "Connect Safely",
    description: "Chat securely within our platform and meet your matches in person when you're ready.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-white to-valentine-pink/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-valentine-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
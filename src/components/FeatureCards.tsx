import { ExternalLink } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      title: "One API for Any Model",
      description: "Access all major models through a single, unified interface. OpenAI's SDK works out of the box.",
      icon: "📊",
      link: "Browse all"
    },
    {
      title: "Higher Availability", 
      description: "Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.",
      icon: "⚡",
      link: "Learn more"
    },
    {
      title: "Price and Performance",
      description: "Keep costs in check without sacrificing speed. OpenRouter falls at the Pareto, adding just ~250ms between you and your inference.",
      icon: "💰",
      link: "Learn more"
    },
    {
      title: "Custom Data Policies",
      description: "Protect user data protection with fine-grained data policies. Ensure prompts only go to the models and providers you trust.",
      icon: "🛡️",
      link: "View docs"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 py-16">
      {features.map((feature, index) => (
        <div key={index} className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl mb-4">{feature.icon}</div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
          <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
          <a href="#" className="inline-flex items-center text-blue-600 text-sm hover:underline">
            {feature.link}
            <ExternalLink className="ml-1 w-3 h-3" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
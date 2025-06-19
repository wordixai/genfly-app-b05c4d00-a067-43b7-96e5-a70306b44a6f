import { Button } from "@/components/ui/button";

const ProviderIcons = () => {
  const providers = [
    { name: "Google", icon: "https://openrouter.ai/images/icons/GoogleGemini.svg" },
    { name: "OpenAI", icon: "https://openrouter.ai/images/icons/OpenAI.svg" },
    { name: "Anthropic", icon: "https://openrouter.ai/images/icons/Anthropic.svg" }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 pb-3">
      {providers.map((provider) => (
        <Button
          key={provider.name}
          variant="ghost"
          className="whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 h-11 flex items-center justify-center rounded-lg p-4"
        >
          <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-slate-200 shadow bg-slate-50 p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
            <div className="overflow-hidden rounded-full">
              <img
                width="24"
                height="24"
                alt={`${provider.name} icon`}
                src={provider.icon}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default ProviderIcons;
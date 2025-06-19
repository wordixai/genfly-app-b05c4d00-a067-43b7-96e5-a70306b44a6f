import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatInput from "@/components/ChatInput";
import RouteVisualization from "@/components/RouteVisualization";
import ModelCard from "@/components/ModelCard";
import ProviderIcons from "@/components/ProviderIcons";
import StatsSection from "@/components/StatsSection";
import FeatureCards from "@/components/FeatureCards";
import { ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="tabular-nums">
        <div className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-slate-50 text-slate-900 mb-16 mt-0 max-w-full lg:mt-8">
          <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
            
            {/* Hero Section */}
            <div className="flex w-full max-w-4xl flex-col justify-center py-8 md:py-0">
              <div className="mb-3 flex flex-col gap-2 md:-mb-48 md:gap-1">
                <h1 className="my-0 w-full py-0 text-5xl font-semibold text-slate-900">
                  <span className="mb-1 hidden md:block">The Unified</span>
                  <span className="hidden md:block">Interface For LLMs</span>
                  <span className="flex flex-col gap-0.5 text-3xl md:hidden">
                    <div>The Unified</div>
                    <div>Interface For LLMs</div>
                  </span>
                </h1>
                <p className="text-slate-600 text-md mb-4 md:mb-8 md:pt-2 md:text-xl">
                  Better <a href="#" className="text-blue-600 hover:underline">prices</a>, 
                  better <a href="#" className="text-blue-600 hover:underline">uptime</a>, 
                  no subscription.
                </p>
              </div>

              {/* Chat Interface */}
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
                <div className="relative w-full">
                  <ChatInput />
                  {/* Desktop route visualization */}
                  <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 translate-x-1/3 md:flex">
                    <RouteVisualization />
                  </div>
                </div>

                {/* Mobile and Featured Models */}
                <div className="w-full min-w-80 space-y-3 md:w-auto">
                  {/* Mobile route visualization */}
                  <div className="block md:hidden">
                    <RouteVisualization isMobile />
                    <ProviderIcons />
                    <ModelCard
                      name="GPT-4.1"
                      provider="openai"
                      tokensWeek="36.2B"
                      latency="619ms"
                      growth="-21.58%"
                      growthColor="text-red-600"
                      icon="https://openrouter.ai/images/icons/OpenAI.svg"
                      isActive
                    />
                    <div className="flex items-center justify-between px-2 pt-4">
                      <h2 className="text-slate-600 text-sm font-medium">Featured Models</h2>
                      <a className="text-blue-600 text-xs hover:underline flex items-center" href="#">
                        View Trending
                        <ExternalLink className="inline-block ml-1 size-3" />
                      </a>
                    </div>
                  </div>

                  {/* Desktop Featured Models */}
                  <div className="hidden space-y-3 md:block">
                    <div className="flex items-center justify-between">
                      <h2 className="text-slate-600 text-sm font-medium">Featured Models</h2>
                      <a className="text-blue-600 text-xs hover:underline flex items-center" href="#">
                        View Trending
                        <ExternalLink className="inline-block ml-1 size-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="w-full max-w-4xl">
              <StatsSection />
            </div>

            {/* Feature Cards */}
            <div className="w-full max-w-6xl">
              <FeatureCards />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
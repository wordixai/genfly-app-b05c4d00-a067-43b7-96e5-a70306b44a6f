import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ModelCardProps {
  name: string;
  provider: string;
  tokensWeek: string;
  latency: string;
  growth: string;
  growthColor: string;
  icon: string;
  isActive?: boolean;
}

const ModelCard = ({ 
  name, 
  provider, 
  tokensWeek, 
  latency, 
  growth, 
  growthColor, 
  icon,
  isActive = false 
}: ModelCardProps) => {
  return (
    <div className={`group text-card-foreground transition-all duration-200 hover:text-slate-900 hover:shadow-lg bg-white rounded-lg border p-4 shadow-sm ${
      isActive ? 'border-blue-500' : 'hover:border-blue-500'
    }`}>
      <div className="space-y-2">
        <div>
          <a className="hover:underline" href="#">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h3 className="text-slate-900 font-medium">{name}</h3>
              </div>
              <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-slate-200 shadow bg-slate-50 p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className="overflow-hidden rounded-full">
                  <img 
                    width="24" 
                    height="24" 
                    alt={`${provider} icon`} 
                    src={icon}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </a>
          <div className="flex items-center">
            <span className="text-slate-500 text-xs">
              by{" "}
              <a className="text-blue-600 hover:underline" href="#">
                {provider}
              </a>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
          <div>
            <p className="text-green-600 text-sm font-medium">{tokensWeek}</p>
            <p className="text-slate-500 text-[10px]">Tokens/wk</p>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900">{latency}</p>
            <p className="text-slate-500 text-[10px]">Latency</p>
          </div>
          <div>
            <p className={`text-sm font-medium ${growthColor}`}>{growth}</p>
            <p className="text-slate-500 text-[10px]">Weekly growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
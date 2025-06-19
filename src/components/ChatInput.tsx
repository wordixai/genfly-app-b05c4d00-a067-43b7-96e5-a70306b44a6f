import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="group text-card-foreground rounded-xl transition-all duration-200 hover:border-slate-300 hover:text-slate-900 border hover:shadow-lg bg-white relative w-full p-2 shadow-md md:translate-y-5">
      <div className="flex w-full items-center justify-between gap-3 flex-row">
        <Input
          className="w-full appearance-none py-2 transition duration-150 ease-in-out placeholder:text-slate-400 focus:shadow-inner focus:outline-none text-slate-600 bg-white focus:bg-slate-50 h-10 flex-1 rounded-lg border-0 px-4"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          type="text"
          placeholder="Start a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 gap-2 leading-6 bg-blue-600 text-white shadow hover:bg-blue-700 py-4 group aspect-square h-10 px-3 transition-colors md:aspect-auto md:flex-shrink-0">
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
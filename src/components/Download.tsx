import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div id="download-section" className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get Started Today
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Download both of our apps and experience how easy the Situation Reporting is. Available only on Android, iOS is coming soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.lintasin" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="px-8 py-6 text-lg glass-effect hover:bg-white/10 flex items-center gap-2">
                <img 
                  src="/lovable-uploads/8e8e1257-8a5a-4823-a032-a0bf33274e52.png" 
                  alt="Lintasin Logo" 
                  className="w-5 h-5"
                />
                Lintasin FirstHand
              </Button>
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.lintasin.monitor" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="px-8 py-6 text-lg glass-effect hover:bg-white/10 flex items-center gap-2">
                <img 
                  src="/lovable-uploads/4b78779f-28e4-4f6d-90b4-602e016a1372.png" 
                  alt="Lintasin Monitoring Logo" 
                  className="w-5 h-5"
                />
                Lintasin Monitoring
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
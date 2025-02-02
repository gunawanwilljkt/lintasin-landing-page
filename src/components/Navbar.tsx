import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/cb148134-b1dc-45ec-9747-c44053c13cf1.png" 
              alt="Lintasin Logo" 
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold text-white">Lintasin</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Button variant="link" className="text-white">Features</Button>
            <Button variant="link" className="text-white">Pricing</Button>
            <Button variant="link" className="text-white">About</Button>
            <Button variant="link" className="text-white">Contact</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
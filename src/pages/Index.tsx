import React from "react";
import { Home, TreePine, Footprints, Moon } from "lucide-react";
import PortalIcon from "@/components/PortalIcon";
import ForestBackground from "@/components/ForestBackground";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleIconClick = (section: string) => {
    switch (section) {
      case "Toca":
        navigate("/toca");
        break;
      case "Árvore do Conhecimento":
        navigate("/arvore-conhecimento");
        break;
      default:
        toast(`${section} será implementada em breve!`, {
          description: "Esta seção está em desenvolvimento.",
        });
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4">
      <ForestBackground />
      
      <h1 className="text-4xl md:text-6xl font-bold text-forest-light mb-12 animate-fade-in">
        Portal da Matilha
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
        <PortalIcon
          icon={Home}
          label="Toca"
          className="delay-100"
          onClick={() => handleIconClick("Toca")}
        />
        <PortalIcon
          icon={TreePine}
          label="Árvore do Conhecimento"
          className="delay-200"
          onClick={() => handleIconClick("Árvore do Conhecimento")}
        />
        <PortalIcon
          icon={Footprints}
          label="Pegadas"
          className="delay-300"
          onClick={() => handleIconClick("Pegadas")}
        />
        <PortalIcon
          icon={Moon}
          label="Lua"
          className="delay-400"
          onClick={() => handleIconClick("Lua")}
        />
      </div>
    </div>
  );
};

export default Index;
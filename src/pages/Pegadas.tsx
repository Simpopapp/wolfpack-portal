import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Wolf, Footprints, BookOpen, Calendar } from "lucide-react";
import { toast } from "sonner";
import ForestBackground from "@/components/ForestBackground";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Pegadas = () => {
  const navigate = useNavigate();

  const games = [
    {
      title: "Sobrevivência da Matilha",
      description: "Guie sua matilha através de desafios ecológicos como busca por alimento e cuidado com filhotes.",
      icon: Wolf,
      image: "/images/pegadas/sobrevivencia-matilha.jpg",
      comingSoon: true
    },
    {
      title: "Rastros na Neve",
      description: "Identifique diferentes pegadas de animais e descubra suas histórias.",
      icon: Footprints,
      image: "/images/pegadas/rastros-neve.jpg",
      comingSoon: true
    },
    {
      title: "Caçador de Lendas",
      description: "Teste seus conhecimentos sobre mitos e fatos relacionados aos lobos.",
      icon: BookOpen,
      image: "/images/pegadas/cacador-lendas.jpg",
      comingSoon: true
    },
    {
      title: "Desafios Diários",
      description: "Complete missões curtas e ganhe recompensas especiais.",
      icon: Calendar,
      image: "/images/pegadas/desafios-diarios.jpg",
      comingSoon: true
    }
  ];

  const handleGameClick = (title: string) => {
    toast("Em breve!", {
      description: `${title} está em desenvolvimento e será lançado em breve!`,
    });
  };

  return (
    <div className="min-h-screen relative">
      <ForestBackground />
      
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-8 text-forest-light hover:text-forest-light/80"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2" />
          Voltar ao Portal
        </Button>

        <h1 className="text-4xl md:text-6xl font-bold text-forest-light mb-8 animate-fade-in">
          Pegadas
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          {games.map((game) => (
            <Card 
              key={game.title}
              className="bg-forest-dark/40 border-forest-primary/30 backdrop-blur-sm hover:bg-forest-dark/60 transition-all cursor-pointer group"
              onClick={() => handleGameClick(game.title)}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <game.icon className="w-6 h-6 text-forest-primary" />
                  <CardTitle className="text-forest-light">{game.title}</CardTitle>
                </div>
                <CardDescription className="text-forest-light/80">
                  {game.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {game.comingSoon && (
                    <div className="absolute inset-0 bg-forest-dark/60 flex items-center justify-center text-forest-light font-semibold">
                      Em breve!
                    </div>
                  )}
                </AspectRatio>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pegadas;
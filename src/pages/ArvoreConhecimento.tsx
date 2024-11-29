import React from "react";
import { Book, Map, Headphones, TreePine } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { toast } from "sonner";

const ArvoreConhecimento = () => {
  const handleInteractiveFeature = (feature: string) => {
    toast("Em desenvolvimento", {
      description: `A funcionalidade "${feature}" será implementada em breve!`,
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-forest-dark to-forest-light">
      <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-forest-light">
            Árvore do Conhecimento
          </h1>
          <p className="text-lg text-forest-light/80">
            Explore o fascinante mundo dos lobos
          </p>
        </header>

        <Tabs defaultValue="biologia" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="biologia">
              <TreePine className="mr-2 h-4 w-4" />
              Biologia e Ecologia
            </TabsTrigger>
            <TabsTrigger value="cultura">
              <Book className="mr-2 h-4 w-4" />
              Cultura e Mitos
            </TabsTrigger>
            <TabsTrigger value="mapas">
              <Map className="mr-2 h-4 w-4" />
              Mapas e Rotas
            </TabsTrigger>
            <TabsTrigger value="audio">
              <Headphones className="mr-2 h-4 w-4" />
              Narrativas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="biologia" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Anatomia do Lobo</CardTitle>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9}>
                    <div 
                      className="w-full h-full bg-muted rounded-lg flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors"
                      onClick={() => handleInteractiveFeature("Anatomia Interativa")}
                    >
                      <p className="text-muted-foreground">Diagrama Interativo em Breve</p>
                    </div>
                  </AspectRatio>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Comportamento Social</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px] rounded-md border p-4">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Estrutura da Matilha</h3>
                      <p>Os lobos vivem em grupos familiares chamados matilhas, liderados por um casal alfa. A hierarquia social é fundamental para a sobrevivência do grupo.</p>
                      <h3 className="font-semibold">Comunicação</h3>
                      <p>Lobos se comunicam através de vocalizações, linguagem corporal e marcações territoriais. O famoso uivo serve tanto para reunir a matilha quanto para comunicação com outros grupos.</p>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cultura" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Lendas e Mitos</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] rounded-md border p-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold">Mitologia Nórdica</h3>
                      <p>Fenrir, o lobo gigante, e os lobos Sköll e Hati são figuras centrais na mitologia nórdica.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Culturas Indígenas</h3>
                      <p>Para muitos povos indígenas, o lobo é um animal espiritual que representa lealdade, força e sabedoria.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Lendas Asiáticas</h3>
                      <p>Na cultura japonesa, o lobo (ōkami) é considerado um mensageiro divino.</p>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mapas" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Habitats e Migrações</CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={16 / 9}>
                  <div 
                    className="w-full h-full bg-muted rounded-lg flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors"
                    onClick={() => handleInteractiveFeature("Mapa Interativo")}
                  >
                    <p className="text-muted-foreground">Mapa Interativo em Breve</p>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audio" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Histórias Narradas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {["A Lenda do Primeiro Lobo", "O Uivo da Lua Cheia", "A Matilha do Norte"].map((titulo) => (
                    <div 
                      key={titulo}
                      className="flex items-center gap-4 p-4 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => handleInteractiveFeature("Áudio Narrativo")}
                    >
                      <Headphones className="h-6 w-6" />
                      <span>{titulo}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ArvoreConhecimento;
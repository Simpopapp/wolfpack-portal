import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Book, Palette, Globe } from "lucide-react";
import ForestBackground from "@/components/ForestBackground";

const Toca = () => {
  const { toast } = useToast();

  const handleAvatarSelect = (value: string) => {
    toast({
      title: "Avatar selecionado",
      description: `Você escolheu ser um lobo ${value}`,
    });
  };

  const handleThemeChange = (value: string) => {
    toast({
      title: "Tema alterado",
      description: `Tema alterado para ${value}`,
    });
  };

  const handleLanguageChange = (value: string) => {
    toast({
      title: "Idioma alterado",
      description: `Idioma alterado para ${value}`,
    });
  };

  return (
    <div className="min-h-screen p-6 relative">
      <ForestBackground />
      
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <h1 className="text-4xl font-bold text-forest-light mb-8">Toca</h1>

        <Tabs defaultValue="avatar" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-forest-primary/20 backdrop-blur-sm">
            <TabsTrigger value="avatar" className="flex gap-2">
              <User className="w-4 h-4" />
              Avatar
            </TabsTrigger>
            <TabsTrigger value="diary" className="flex gap-2">
              <Book className="w-4 h-4" />
              Diário
            </TabsTrigger>
            <TabsTrigger value="theme" className="flex gap-2">
              <Palette className="w-4 h-4" />
              Tema
            </TabsTrigger>
            <TabsTrigger value="language" className="flex gap-2">
              <Globe className="w-4 h-4" />
              Idioma
            </TabsTrigger>
          </TabsList>

          <TabsContent value="avatar" className="space-y-4">
            <div className="bg-forest-primary/20 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Escolha seu Avatar</h2>
              <RadioGroup onValueChange={handleAvatarSelect} className="grid grid-cols-3 gap-4">
                {["Alfa", "Explorador", "Guardião"].map((type) => (
                  <div key={type} className="flex flex-col items-center space-y-2 p-4 bg-forest-primary/30 rounded-lg hover:bg-forest-primary/40 transition-colors">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={`/placeholder.svg`} />
                      <AvatarFallback>{type[0]}</AvatarFallback>
                    </Avatar>
                    <RadioGroupItem value={type} id={type} className="sr-only" />
                    <label htmlFor={type} className="font-medium cursor-pointer">
                      {type}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </TabsContent>

          <TabsContent value="diary" className="space-y-4">
            <div className="bg-forest-primary/20 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Diário de Exploração</h2>
              <p className="text-forest-light/80">
                Aqui você poderá registrar suas aventuras e conquistas...
              </p>
              <Button className="mt-4" variant="outline">
                Novo Registro
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="theme" className="space-y-4">
            <div className="bg-forest-primary/20 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Tema</h2>
              <Select onValueChange={handleThemeChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha um tema" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="floresta">Floresta</SelectItem>
                  <SelectItem value="tundra">Tundra</SelectItem>
                  <SelectItem value="montanhas">Montanhas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>

          <TabsContent value="language" className="space-y-4">
            <div className="bg-forest-primary/20 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Idioma</h2>
              <Select onValueChange={handleLanguageChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha um idioma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Toca;
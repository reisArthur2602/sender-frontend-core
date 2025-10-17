import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle,
  MessageSquare,
  QrCode,
  Settings,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "../../../shared/components/shadcnui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../shared/components/shadcnui/dialog";
import { Progress } from "../../../shared/components/shadcnui/progress";
import { Button } from "../../../shared/components/shadcnui/button";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
    if (!hasSeenOnboarding) setIsOpen(true);
  }, []);

  const steps = [
    {
      title: "Conecte seu WhatsApp 📱",
      description: "Para começar, escaneie o QR Code com seu WhatsApp",
      content: (
        <div className="space-y-4 text-center">
          <div className="bg-primary/10 mx-auto flex h-20 w-20 items-center justify-center rounded-full">
            <QrCode className="text-primary h-10 w-10" />
          </div>
          <p className="text-muted-foreground">
            Abra o WhatsApp no seu celular e escaneie o QR Code exibido no app
            para conectar sua conta.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <Badge variant="secondary">🔗 Conexão segura</Badge>
            <Badge variant="secondary">⚡ Rápida e fácil</Badge>
          </div>
        </div>
      ),
    },
    {
      title: "Bem-vindo ao Sender! 🎉",
      description: "Sua plataforma de automação de WhatsApp está pronta!",
      content: (
        <div className="space-y-4 text-center">
          <div className="bg-primary/10 mx-auto flex h-20 w-20 items-center justify-center rounded-full">
            <Sparkles className="text-primary h-10 w-10" />
          </div>
          <p className="text-muted-foreground">
            Parabéns! Agora você pode automatizar suas conversas e acompanhar
            métricas em tempo real.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <Badge variant="secondary">⚡ Automação rápida</Badge>
            <Badge variant="secondary">📊 Métricas em tempo real</Badge>
            <Badge variant="secondary">💬 Gerencie contatos facilmente</Badge>
          </div>
        </div>
      ),
    },
    {
      title: "Dashboard",
      description: "Veja todas as métricas e status das suas automações",
      content: (
        <div className="space-y-4">
          <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <BarChart3 className="text-primary h-8 w-8" />
          </div>
          <ul className="space-y-2 text-sm">
            <li>• Visualize desempenho de automações</li>
            <li>• Acompanhe envio e respostas de mensagens</li>
            <li>• Veja métricas de engajamento e contatos</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Gerencie seus contatos",
      description: "Adicione, organize e filtre contatos facilmente",
      content: (
        <div className="space-y-4">
          <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <Users className="text-primary h-8 w-8" />
          </div>
          <ul className="space-y-2 text-sm">
            <li>• Filtre contatos por nome</li>
            <li>• Sincronize listas de clientes rapidamente</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Configure suas automações",
      description: "Crie respostas automáticas e fluxos inteligentes",
      content: (
        <div className="space-y-4">
          <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <Zap className="text-primary h-8 w-8" />
          </div>
          <ul className="space-y-2 text-sm">
            <li>• Respostas automáticas por palavras-chave</li>
            <li>• Sequências de mensagens programadas</li>
            <li>• Notificações de eventos importantes</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Menus e comandos",
      description: "Crie menus interativos para os seus contatos",
      content: (
        <div className="space-y-4">
          <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <MessageSquare className="text-primary h-8 w-8" />
          </div>
          <ul className="space-y-2 text-sm">
            <li>• Cadastre menus personalizados</li>
            <li>• Organize comandos e respostas rápidas</li>
            <li>• Simplifique a interação dos usuários</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Tudo pronto! 🚀",
      description: "Comece a automatizar suas conversas agora",
      content: (
        <div className="flex-1 space-y-4 text-center">
          <div className="bg-primary/10 mx-auto flex h-20 w-20 items-center justify-center rounded-full">
            <Settings className="text-primary h-10 w-10" />
          </div>
          <p className="text-muted-foreground">
            Explore o dashboard, cadastre contatos e configure automações para
            otimizar seu WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <Badge variant="secondary">📊 Métricas em tempo real</Badge>
            <Badge variant="secondary">💬 Contatos organizados</Badge>
            <Badge variant="secondary">⚡ Automação inteligente</Badge>
          </div>
        </div>
      ),
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleClose = () => {
    localStorage.setItem("hasSeenOnboarding", "true");
    setIsOpen(false);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="min-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">
              {steps[currentStep].title}
            </DialogTitle>
            <Badge variant="outline">
              {currentStep + 1} de {steps.length}
            </Badge>
          </div>
          <DialogDescription className="text-base">
            {steps[currentStep].description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <Progress value={progress} className="h-2" />

          <div className="flex min-h-[300px] items-center justify-center">
            {steps[currentStep].content}
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Anterior
            </Button>

            <div className="flex items-center space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index <= currentStep ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>

            {currentStep === steps.length - 1 ? (
              <Button onClick={handleClose}>
                <CheckCircle className="mr-2 h-4 w-4" />
                Começar a usar
              </Button>
            ) : (
              <Button onClick={nextStep}>
                Próximo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;

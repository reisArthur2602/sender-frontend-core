import { Loader2, Wifi, WifiOff } from "lucide-react";
import { useState } from "react";

const useIntegration = () => {
  const [sessionStatus, setSessionStatus] = useState<
    "disconnected" | "connecting" | "connected" | "expired"
  >("connected");

  const onDisconnect = () => {
    setSessionStatus("disconnected");
  };

  const getStatusConfig = () => {
    switch (sessionStatus) {
      case "connected":
        return {
          icon: Wifi,
          label: "Conectado",
          color: "success",
          description: "WhatsApp está conectado e funcionando",
        };
      case "connecting":
        return {
          icon: Loader2,
          label: "Conectando...",
          color: "warning",
          description: "Escaneie o QR Code com seu WhatsApp",
        };
      case "expired":
        return {
          icon: WifiOff,
          label: "Sessão Expirada",
          color: "destructive",
          description: "A sessão expirou, reconecte seu WhatsApp",
        };
      default:
        return {
          icon: WifiOff,
          label: "Desconectado",
          color: "secondary",
          description: "WhatsApp não está conectado",
        };
    }
  };

  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;

  return { statusConfig, StatusIcon, onDisconnect, sessionStatus };
};

export default useIntegration;

import { useState } from "react";

import { Wifi, WifiOff, Loader2, Smartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../shared/components/shadcnui/card";
import { Badge } from "../../shared/components/shadcnui/badge";
import { Button } from "../../shared/components/shadcnui/button";
import Wrapper from "../../shared/components/wrapper";
import Headline from "../../shared/components/headline";
import useIntegration from "./hooks/use-integration";

const IntegrationPage = () => {
  const { StatusIcon, onDisconnect, sessionStatus, statusConfig } =
    useIntegration();

  return (
    <Wrapper>
      <Headline
        title="Integração"
        subtitle="Configure e gerencie a integração com o WhatsApp para automatizar conversas e ampliar seus resultados."
      />

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <StatusIcon
                className={`h-5 w-5 ${sessionStatus === "connecting" ? "animate-spin" : ""} ${
                  statusConfig.color === "success"
                    ? "text-success"
                    : statusConfig.color === "warning"
                      ? "text-warning"
                      : statusConfig.color === "destructive"
                        ? "text-destructive"
                        : "text-muted-foreground"
                }`}
              />
              <span>Status da Sessão</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid h-full gap-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Estado:</span>
                <Badge
                  variant={
                    statusConfig.color === "success"
                      ? "default"
                      : statusConfig.color === "warning"
                        ? "secondary"
                        : statusConfig.color === "destructive"
                          ? "destructive"
                          : "secondary"
                  }
                >
                  {statusConfig.label}
                </Badge>
              </div>

              <p className="text-muted-foreground text-sm">
                {statusConfig.description}
              </p>
            </div>

            {sessionStatus === "connected" && (
              <Button
                variant="outline"
                onClick={onDisconnect}
                className="mt-auto"
              >
                <WifiOff className="h-4 w-4" />
                Desconectar
              </Button>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conectar via QR Code</CardTitle>
          </CardHeader>
          <CardContent>
            {sessionStatus === "connecting" ? (
              <div className="space-y-4">
                <div className="bg-card border-border flex h-64 w-full items-center justify-center rounded-lg border-2 border-dashed">
                  <div className="space-y-3 text-center">
                    <div className="bg-muted flex h-48 w-48 items-center justify-center rounded-lg">
                      <div className="grid grid-cols-4 gap-1">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-3 w-3 rounded-sm ${
                              Math.random() > 0.5
                                ? "bg-foreground"
                                : "bg-background"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  <h3 className="font-medium">Escaneie o QR Code</h3>
                  <ol className="text-muted-foreground space-y-1 text-left text-sm">
                    <li>1. Abra o WhatsApp no seu celular</li>
                    <li>2. Vá em Menu → Dispositivos conectados</li>
                    <li>3. Toque em "Conectar um dispositivo"</li>
                    <li>4. Aponte o celular para esta tela</li>
                  </ol>
                </div>
              </div>
            ) : (
              <div className="bg-accent/10 flex h-64 w-full items-center justify-center rounded-lg">
                <div className="space-y-3 text-center">
                  <Smartphone className="text-muted-foreground mx-auto h-12 w-12" />
                  <div>
                    <h3 className="text-foreground font-medium">
                      QR Code não disponível
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {sessionStatus === "connected"
                        ? "WhatsApp já está conectado"
                        : 'Clique em "Conectar WhatsApp" para gerar o QR Code'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </Wrapper>
  );
};

export default IntegrationPage;

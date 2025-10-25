"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

export default function TestNetworkPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const addResult = (result: string) => {
    setResults((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${result}`]);
  };

  const testBasicConnection = async () => {
    setIsLoading(true);
    addResult("🔍 Тестируем базовое подключение к интернету...");

    try {
      const response = await fetch("https://httpbin.org/get", {
        signal: AbortSignal.timeout(10000),
      });

      if (response.ok) {
        addResult("✅ Базовое подключение работает");
      } else {
        addResult(`❌ Базовое подключение: ${response.status}`);
      }
    } catch (error) {
      addResult(`❌ Базовое подключение: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testTelegramAPI = async () => {
    setIsLoading(true);
    addResult("🔍 Тестируем подключение к Telegram API...");

    try {
      const response = await fetch(
        "https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11/getMe",
        {
          signal: AbortSignal.timeout(15000),
        }
      );

      if (response.ok) {
        addResult("✅ Telegram API доступен");
      } else {
        addResult(`❌ Telegram API: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      addResult(`❌ Telegram API: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testDNS = async () => {
    setIsLoading(true);
    addResult("🔍 Тестируем DNS разрешение...");

    try {
      const response = await fetch("https://api.telegram.org", {
        method: "HEAD",
        signal: AbortSignal.timeout(10000),
      });

      if (response.status === 404 || response.status === 405) {
        addResult("✅ DNS работает (получили ответ от сервера)");
      } else {
        addResult(`✅ DNS работает (статус: ${response.status})`);
      }
    } catch (error) {
      addResult(`❌ DNS: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const clearResults = () => {
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8">Диагностика сети</h1>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button onClick={testBasicConnection} disabled={isLoading} variant="outline">
              {isLoading ? "Тестирование..." : "Тест базового подключения"}
            </Button>

            <Button onClick={testTelegramAPI} disabled={isLoading} variant="outline">
              {isLoading ? "Тестирование..." : "Тест Telegram API"}
            </Button>

            <Button onClick={testDNS} disabled={isLoading} variant="outline">
              {isLoading ? "Тестирование..." : "Тест DNS"}
            </Button>

            <Button onClick={clearResults} disabled={isLoading} variant="secondary">
              Очистить результаты
            </Button>
          </div>

          {results.length > 0 && (
            <div className="p-4 bg-card rounded-lg border border-theme">
              <h3 className="font-semibold mb-3">Результаты тестирования:</h3>
              <div className="space-y-1 max-h-96 overflow-y-auto">
                {results.map((result, index) => (
                  <div key={index} className="text-sm font-mono">
                    {result}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 bg-info/10 rounded-lg border border-info/20">
            <h3 className="font-semibold text-info mb-2">Информация:</h3>
            <ul className="text-sm text-muted space-y-1">
              <li>
                • <strong>Базовое подключение</strong> - проверяет доступ к интернету
              </li>
              <li>
                • <strong>Telegram API</strong> - проверяет доступ к api.telegram.org
              </li>
              <li>
                • <strong>DNS</strong> - проверяет разрешение доменных имен
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

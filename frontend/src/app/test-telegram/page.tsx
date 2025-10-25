"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { sendToTelegram, checkTelegramConnection } from "@/utils/telegram";

export default function TestTelegramPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>("");

  const testConnection = async () => {
    setIsLoading(true);
    setResult("Проверяем соединение...");

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "check",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setResult("✅ Соединение успешно!");
      } else {
        setResult(`❌ Ошибка: ${result.error || "Неизвестная ошибка"}`);
        if (result.details) {
          setResult((prev) => prev + `\n\nДетали: ${result.details}`);
        }
      }
    } catch (error) {
      setResult(`❌ Ошибка: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testMessage = async () => {
    setIsLoading(true);
    setResult("Отправляем тестовое сообщение...");

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "send",
          data: {
            name: "Тестовый пользователь",
            email: "test@example.com",
            subject: "Тестовое сообщение",
            message:
              "Это тестовое сообщение для проверки работы Telegram Bot интеграции.",
          },
        }),
      });

      const result = await response.json();

      if (result.success) {
        setResult("✅ Сообщение отправлено!");
      } else {
        setResult(`❌ Ошибка: ${result.error || "Неизвестная ошибка"}`);
        if (result.details) {
          setResult((prev) => prev + `\n\nДетали: ${result.details}`);
        }
      }
    } catch (error) {
      setResult(`❌ Ошибка: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8">Тест Telegram Bot</h1>

        <div className="space-y-4">
          <div className="p-4 bg-card rounded-lg border border-theme">
            <h2 className="text-xl font-semibold mb-4">Настройки</h2>
            <div className="space-y-2 text-sm text-muted">
              <p>
                <strong>Бот:</strong> Portfolio Contact Bot (@Portfol2929Bot)
              </p>
              <p>
                <strong>Chat ID:</strong> 1224994474
              </p>
              <p>
                <strong>Получатель:</strong> @DimaBagz
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button onClick={testConnection} disabled={isLoading} variant="outline">
              {isLoading ? "Проверка..." : "Проверить соединение"}
            </Button>

            <Button onClick={testMessage} disabled={isLoading}>
              {isLoading ? "Отправка..." : "Отправить тест"}
            </Button>
          </div>

          {result && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm">{result}</p>
            </div>
          )}

          <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
            <h3 className="font-semibold text-warning mb-2">Важно:</h3>
            <ul className="text-sm text-muted space-y-1">
              <li>
                • Убедитесь, что создали файл <code>.env.local</code> в папке{" "}
                <code>frontend/</code>
              </li>
              <li>• Проверьте, что бот добавлен в ваш Telegram</li>
              <li>• Убедитесь, что бот может отправлять вам сообщения</li>
            </ul>
          </div>

          <div className="p-4 bg-error/10 rounded-lg border border-error/20">
            <h3 className="font-semibold text-error mb-2">Если не работает:</h3>
            <ul className="text-sm text-muted space-y-1">
              <li>• Проверьте интернет-соединение</li>
              <li>• Возможно, корпоративный файрвол блокирует Telegram API</li>
              <li>• Попробуйте использовать VPN</li>
              <li>• Проверьте настройки прокси</li>
              <li>• Убедитесь, что токены правильные</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

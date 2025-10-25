import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { action, data } = await request.json();

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Telegram токены не настроены" },
        { status: 500 }
      );
    }

    if (action === "check") {
      // Проверка соединения
      const url = `https://api.telegram.org/bot${botToken}/getMe`;

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          console.log("Таймаут подключения к Telegram API");
          controller.abort();
        }, 15000); // 15 секунд таймаут

        console.log("Попытка подключения к Telegram API:", url);
        const response = await fetch(url, {
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        console.log("Ответ от Telegram API:", response.status, response.statusText);
        const result = await response.json();

        return NextResponse.json({
          success: response.ok,
          data: result,
        });
      } catch (error) {
        console.error("Ошибка подключения к Telegram API:", error);

        // Попробуем альтернативный способ проверки
        try {
          console.log("Пробуем альтернативную проверку...");
          const altUrl = `https://api.telegram.org/bot${botToken}/getUpdates`;
          const altResponse = await fetch(altUrl, {
            signal: AbortSignal.timeout(10000),
          });

          if (altResponse.ok) {
            return NextResponse.json({
              success: true,
              data: { message: "Альтернативная проверка прошла успешно" },
            });
          }
        } catch (altError) {
          console.error("Альтернативная проверка тоже не удалась:", altError);
        }

        return NextResponse.json({
          success: false,
          error: "Не удается подключиться к Telegram API. Возможные причины:",
          details: [
            "• Блокировка корпоративным файрволом",
            "• Проблемы с DNS",
            "• Неправильные токены",
            "• Проблемы с сетью",
          ].join("\n"),
        });
      }
    }

    if (action === "send") {
      // Отправка сообщения
      const { name, email, subject, message } = data;

      const formattedMessage = `
📧 *Новое сообщение с сайта портфолио*

👤 *Имя:* ${name}
📧 *Email:* ${email}
📝 *Тема:* ${subject}

💬 *Сообщение:*
${message}

⏰ *Время:* ${new Date().toLocaleString("ru-RU")}
      `.trim();

      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          console.log("Таймаут отправки в Telegram");
          controller.abort();
        }, 20000); // 20 секунд таймаут

        console.log("Попытка отправки в Telegram:", url);
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: formattedMessage,
            parse_mode: "Markdown",
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        console.log(
          "Ответ от Telegram при отправке:",
          response.status,
          response.statusText
        );
        const result = await response.json();

        return NextResponse.json({
          success: response.ok,
          data: result,
        });
      } catch (error) {
        console.error("Ошибка отправки в Telegram:", error);
        return NextResponse.json({
          success: false,
          error:
            "Не удается отправить сообщение в Telegram. Проверьте интернет-соединение.",
          details: error instanceof Error ? error.message : "Неизвестная ошибка",
        });
      }
    }

    return NextResponse.json({ error: "Неизвестное действие" }, { status: 400 });
  } catch (error) {
    console.error("Ошибка API Telegram:", error);
    return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 });
  }
}

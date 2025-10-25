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

    if (action === "send") {
      const { name, email, subject, message } = data;

      // Форматируем сообщение
      const formattedMessage = `
📧 *Новое сообщение с сайта портфолио*

👤 *Имя:* ${name}
📧 *Email:* ${email}
📝 *Тема:* ${subject}

💬 *Сообщение:*
${message}

⏰ *Время:* ${new Date().toLocaleString("ru-RU")}
      `.trim();

      // Попробуем разные прокси-серверы
      const proxyUrls = [
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        `https://api.telegram.org:443/bot${botToken}/sendMessage`,
        `https://149.154.167.220:443/bot${botToken}/sendMessage`, // IP адрес Telegram
        `https://149.154.167.50:443/bot${botToken}/sendMessage`, // Альтернативный IP
      ];

      for (const url of proxyUrls) {
        try {
          console.log(`Пробуем URL: ${url}`);

          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000);

          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: formattedMessage,
              parse_mode: "Markdown",
            }),
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          if (response.ok) {
            const result = await response.json();
            console.log("Успешная отправка через:", url);
            return NextResponse.json({
              success: true,
              data: result,
              proxy: url,
            });
          } else {
            console.log(`Ошибка ${response.status} для URL: ${url}`);
          }
        } catch (error) {
          console.log(`Ошибка для URL ${url}:`, error);
          continue;
        }
      }

      return NextResponse.json({
        success: false,
        error: "Не удается отправить сообщение. Все прокси-серверы недоступны.",
        details: "Попробуйте использовать VPN или другую сеть.",
      });
    }

    return NextResponse.json({ error: "Неизвестное действие" }, { status: 400 });
  } catch (error) {
    console.error("Ошибка API Telegram Proxy:", error);
    return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 });
  }
}

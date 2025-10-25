import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Создаем mailto ссылку
    const mailtoUrl = `mailto:DimaBagZ@yandex.ru?subject=${encodeURIComponent(
      `Портфолио: ${subject}`
    )}&body=${encodeURIComponent(
      `Имя: ${name}\nEmail: ${email}\nТема: ${subject}\n\nСообщение:\n${message}\n\nВремя: ${new Date().toLocaleString(
        "ru-RU"
      )}`
    )}`;

    return NextResponse.json({
      success: true,
      mailtoUrl,
      message: "Создана mailto ссылка для отправки email",
    });
  } catch (error) {
    console.error("Ошибка создания email fallback:", error);
    return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 });
  }
}

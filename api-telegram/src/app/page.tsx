/**
 * Главная страница API проекта
 * Возвращает информацию об API
 */

export default function HomePage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>📡 Telegram Bot API</h1>
      <p>Это API сервер для работы с Telegram ботом портфолио.</p>
      <p>
        <strong>Эндпоинт:</strong> <code>/api/telegram</code>
      </p>
      <p>
        <strong>Методы:</strong> POST
      </p>
      <p>
        <strong>Действия:</strong> check, send
      </p>
    </div>
  );
}

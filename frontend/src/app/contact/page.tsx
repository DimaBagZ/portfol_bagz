import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Контакты | Bagiskij - Fullstack Developer",
  description:
    "Свяжитесь с Bagiskij - fullstack разработчиком. Готов обсудить ваш проект или ответить на вопросы. Email, телефон, социальные сети. Время ответа: в течение 24 часов.",
  openGraph: {
    title: "Контакты | Bagiskij - Fullstack Developer",
    description:
      "Свяжитесь с Bagiskij - fullstack разработчиком. Готов обсудить ваш проект или ответить на вопросы.",
    type: "website",
  },
};

export default function Contact() {
  return <ContactPage />;
}

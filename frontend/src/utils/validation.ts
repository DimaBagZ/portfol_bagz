// Утилиты для валидации

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.trim().length <= maxLength;
};

// Валидация формы контактов
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const validateContactForm = (data: ContactFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!validateRequired(data.name)) {
    errors.name = "Имя обязательно для заполнения";
  } else if (!validateMinLength(data.name, 2)) {
    errors.name = "Имя должно содержать минимум 2 символа";
  }

  if (!validateRequired(data.email)) {
    errors.email = "Email обязателен для заполнения";
  } else if (!validateEmail(data.email)) {
    errors.email = "Введите корректный email";
  }

  if (!validateRequired(data.subject)) {
    errors.subject = "Тема обязательна для заполнения";
  } else if (!validateMinLength(data.subject, 3)) {
    errors.subject = "Тема должна содержать минимум 3 символа";
  }

  if (!validateRequired(data.message)) {
    errors.message = "Сообщение обязательно для заполнения";
  } else if (!validateMinLength(data.message, 10)) {
    errors.message = "Сообщение должно содержать минимум 10 символов";
  } else if (!validateMaxLength(data.message, 1000)) {
    errors.message = "Сообщение не должно превышать 1000 символов";
  }

  return errors;
};

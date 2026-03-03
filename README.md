# React + TypeScript + Vite + @tanstack/react-query + @emotion/styled + Zustand + @tanstack/react-router + axios

Тестовый проект

Для того, что-бы запустить проект, достаточно ввести две команды:

```bash
  npm install
  npm run prod
```
## Сайт проекта, Vercel, где он развёрнут:

[Test Shopping Cart](https://test-shopping-cart-delta.vercel.app/)

## Архитектура проекта

src/
├── api/              # Instances для запросов в services/ или в будущем для других
├── assets/           # Переиспользуемые SVG-компоненты (в данном проекте)
├── components/       # Переиспользуемые UI-компоненты
├── constants/        # Константы
├── helpers/          # Хелперы
├── providers/        # Контекстные провайдеры
├── services/         # API сервисы (axios instances)
├── routes/           # Роуты TanStack Router
├── stores/           # Zustand stores
└── types/            # TypeScript типы (ICart, IPutProduct, IProduct)
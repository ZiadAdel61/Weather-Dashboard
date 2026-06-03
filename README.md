# 📝 Premium React 19 + TypeScript Todo List

A modern, interactive, and highly responsive Todo List application built using **React 19**, **TypeScript**, **Vite**, and **TailwindCSS v4**. It features persistent storage, robust type safety, and a premium aesthetic design.

---

## ✨ Features

- **Task Management**: 
  - **Add Tasks**: Easily create tasks using the input field (supports pressing `Enter` or clicking the `+` button).
  - **Toggle Completion**: Complete tasks using a styled checkbox, visually striking out completed tasks.
  - **Delete Tasks**: Remove tasks instantly using the delete action button.
- **State Persistence**: Integrates browser `localStorage` dynamically through a custom React hook (`useTasks.ts`) so tasks are saved across sessions.
- **Task Counter**: Real-time counter showing the number of remaining (active) tasks.
- **Premium Styling**: Styled with a dark indigo background, a centered glass-like modern card layout, vibrant orange action elements, and clean typography.
- **Full Type Safety**: Engineered with strict TypeScript interfaces for predictable state updates and autocomplete support.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/) (using the new direct `@tailwindcss/vite` configuration)
- **State Management**: React Hooks (`useMemo`, `useRef`, `useState`, `useEffect`) and Custom hooks.

---

## 📂 Project Structure

```text
Todo-list/
├── src/
│   ├── assets/              # App assets (icons, images)
│   ├── hooks/
│   │   └── useTasks.ts      # Custom hook for localStorage persistence
│   ├── types/
│   │   └── Task.ts          # TypeScript declarations (Task & TaskList)
│   ├── App.tsx              # Main component layout & task interactions
│   ├── index.css            # Tailwind CSS import
│   └── main.tsx             # React DOM entry point
├── eslint.config.js         # ESLint strict rules configuration
├── package.json             # Scripts & dependencies
├── tsconfig.json            # TypeScript settings
└── vite.config.ts           # Vite build pipeline definition
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) along with `npm` or `yarn`.

### 2. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Development Server
Start the development server:
```bash
npm run dev
```
Open your browser and navigate to the address shown in your terminal (typically `http://localhost:5173`).

### 4. Build & Preview
To compile the application into static files for production:
```bash
npm run build
```
To run a local web server with the production build:
```bash
npm run preview
```

---

## 💻 Code Architecture Highlight

### State Syncing (`src/hooks/useTasks.ts`)
The application saves tasks in the browser storage using a clean custom hook:

```typescript
import { useEffect, useState } from "react";
import type { TaskList } from "../types/Task";

function useTasks() {
  const [Tasks, setTasks] = useState<TaskList>(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      return JSON.parse(storedTasks);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(Tasks));
  }, [Tasks]);

  return { Tasks, setTasks };
}

export default useTasks;
```

### Strict Type Declarations (`src/types/Task.ts`)
```typescript
export type Task = {
  id: number;
  text: string;
  completed: boolean;
}

export type TaskList = Task[];
```

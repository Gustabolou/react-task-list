# 📝 React Task List App

A simple and elegant task management app built with React. You can add and remove tasks, and your list will be saved even after you refresh the page, thanks to localStorage.

---

## 🚀 Features

- ✅ Add new tasks
- ✅ Remove tasks by clicking on them
- ✅ Persist tasks using `localStorage`
- ✅ Input validation (no empty tasks)
- ✅ Keyboard support (press Enter to add)
- ✅ Component-based architecture
- ✅ Clean and responsive layout with basic styling

---

## 🖼️ Preview

![Captura de tela 2025-05-04 121548](https://github.com/user-attachments/assets/0a365aff-0a95-44bf-bfdd-7ac90de7947c)

---

## 🛠️ Technologies Used

- **React (Hooks):** useState, useRef, useEffect
- **HTML + CSS**
- **JavaScript (ES6+)**
- **localStorage API**

---

## 📂 Folder Structure

```
my-task-app/         
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── myComponent.jsx
│       └── TaskItem.jsx
├── .gitignore             
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js      
├── README.md
├── index.html  

```
---

## 💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Gustabolou/react-task-list.git
cd react-task-list
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

The app will be available at http://localhost:3000.

### 📌 Project Structure Details

- App.js: Main component with task list logic.

- TaskItem.js: A reusable component for rendering each task.

- App.css: Simple styling for layout and interaction feedback.

- localStorage: Used to persist tasks between page reloads.

### 💡 Future Improvements

- ✏️ Edit task functionality

- ✔️ Task completion toggle

- 🔍 Filter by completed / active / all

- 🎨 Theme toggle (dark/light mode)

- 💅 Better styling with Tailwind or Styled-components

- 🧪 Unit tests (Jest + React Testing Library)

### 🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to check the issues page.

### 🧑‍💻 Author
Gustavo – @Gustabolou
Let’s connect!

### 📄 License
This project is licensed under the MIT License.

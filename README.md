# Tasky - Your Todo List

Tasky is a simple and efficient Todo application built with React & Vite. It allows users to manage their tasks with ease, providing functionalities such as adding, editing, deleting, filtering, and searching todos. The application also includes a temporal sign-in and sign-up option, with todos stored in local storage.

## Features

- **Add Todo**: Users can add new todos.
- **Edit Todo**: Users can edit existing todos.
- **Delete Todo**: Users can delete todos.
- **Mark as Completed**: Users can mark todos as completed.
- **Filter Todos**: Users can filter todos based on their status (completed, incomplete, or all).
- **Search Todos**: Users can search for specific todos.
- **Local Storage**: Todos are stored in the browser's local storage.
- **User Authentication**: Temporal sign-in and sign-up options are available.

## Video Demonstration

[Watch the video](public/DemoVideo.mp4)

## File Structure

```
tasky/
├── dist/
├── node_modules/
├── public/
│ ├── favicon.gif
│ └── index.html
├── src/
│ ├── components/
│ │ ├── AddTodo.css
│ │ ├── AddTodo.jsx
│ │ ├── Filter.css
│ │ ├── Filter.jsx
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ ├── TodoCard.css
│ │ ├── TodoCard.jsx
│ │ ├── TodoList.css
│ │ └── TodoList.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── favicon.gif
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

```

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager) or Yarn

### Installation

1. Clone the repository:

   ```bash
   https://github.com/himanshuKr7/Tasky-todo-list-.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tasky
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Project

To run the project locally:

1. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn run dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:5174
   ```

### Usage

1. **Sign Up**: Create a new account using the sign-up form.
2. **Log In**: Log in using your credentials.
3. **Add Todo**: Use the input field to add a new todo.
4. **Edit Todo**: Click on an existing todo to edit it.
5. **Delete Todo**: Click the delete button to remove a todo.
6. **Mark as Completed**: Click the checkbox to mark a todo as completed.
7. **Filter Todos**: Use the filter options to view completed, incomplete, or all todos.
8. **Search Todos**: Use the search bar to find specific todos.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


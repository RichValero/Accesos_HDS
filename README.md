# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- GPT EXAMPLE OF BACKEND FOLDER STRUCTURE
  project/
  │
  ├── backend/ # Node.js + Express Backend
  │ ├── config/ # Database connection
  │ ├── models/ # Sequelize models
  │ ├── routes/ # Auth routes
  │ ├── middleware/ # JWT auth middleware
  │ ├── .env # Environment variables
  │ ├── server.js # Entry point for backend
  │
  ├── frontend/ # Vite + React Frontend
  │ ├── src/
  │ │ ├── components/ # React components
  │ │ ├── pages/ # Login page
  │ │ ├── App.jsx # Main React file
  │ │ └── main.jsx # Vite entry point
  │ └── index.html
  │
  └── package.json

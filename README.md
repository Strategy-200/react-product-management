# Product Management System – React Frontend

A responsive and interactive Product Management application built using **React.js, JavaScript, and CSS**. This frontend allows users to manage product information through a clean user interface and communicates with a FastAPI backend using REST APIs.

## 🚀 Project Overview

The Product Management System is a full-stack application developed to simplify product management operations.

The frontend provides an interactive interface for users to view, add, update, delete, and manage products. It communicates with the backend through HTTP requests and displays data retrieved from a PostgreSQL database.

## ✨ Key Features

- **Product Listing:** Display products dynamically from the backend.
- **Add Products:** Add new products through the user interface.
- **Update Products:** Edit existing product information.
- **Delete Products:** Remove products from the system.
- **Search and Filtering:** Find products using available filtering options.
- **Pagination:** Navigate through product records.
- **API Integration:** Communicate with the FastAPI backend using Fetch API.
- **React Router:** Manage navigation between application pages.
- **Responsive Interface:** Provide a user-friendly interface across different screen sizes.
- **Docker Support:** Run the frontend in a containerized environment.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| JavaScript | Application logic |
| HTML5 | Page structure |
| CSS3 | Styling and responsive design |
| React Router | Client-side navigation |
| Fetch API | Backend API communication |
| FastAPI | Backend REST API |
| PostgreSQL | Application database |
| Docker | Containerization |
| Git & GitHub | Version control |

## 🏗️ System Architecture

```text
       User
        |
        v
 React.js Frontend
        |
        | Fetch API / HTTP Requests
        v
   FastAPI Backend
        |
        | SQLAlchemy ORM
        v
   PostgreSQL Database
```

### How It Works

1. The user interacts with the React frontend.
2. React components handle user actions and application state.
3. Fetch API sends HTTP requests to the FastAPI backend.
4. FastAPI processes the requests and performs database operations.
5. PostgreSQL stores and retrieves product information.
6. The backend returns JSON responses.
7. React updates the interface with the returned data.

## 📂 Project Structure

```text
product-management/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── pages/
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

*Note: The structure above illustrates a typical React project layout. Adjust it to match your actual folders and files.*

## ⚙️ Installation and Setup

### Prerequisites

Install the following:

- Node.js
- npm
- VS Code (recommended)
- Git
- Docker (optional)

### 1. Clone the Repository

```bash
git clone https://github.com/Strategy-200/react-product-management.git
```

Navigate into the project:

```bash
cd react-product-management
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Backend API

Make sure the FastAPI backend is running.

Backend API:

```text
http://127.0.0.1:8000
```

The frontend must use the correct backend API URL in its Fetch API requests.

### 4. Run the Frontend

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

If your Vite configuration uses a different port, use the URL displayed in your terminal.

## 🐳 Running with Docker

Build the frontend Docker image:

```bash
docker build -t product-management-frontend .
```

Run the container:

```bash
docker run -d -p 5174:80 --name product-management-frontend product-management-frontend
```

The port mapping above assumes your Docker image serves the production frontend on port 80.

Open:

```text
http://localhost:5174
```

Ensure the frontend can reach the backend API and that the backend CORS configuration allows the frontend origin.

## 🌟 Benefits of This Project

1. **User-Friendly Interface:** Makes product management easier through an interactive interface.
2. **Component-Based Architecture:** React components help organize and reuse UI elements.
3. **Dynamic Data Management:** Displays information retrieved from the backend.
4. **API Integration:** Demonstrates communication between frontend and backend applications.
5. **Improved Navigation:** React Router supports client-side navigation.
6. **Maintainability:** Separates UI components and application logic.
7. **Scalability:** Can be extended with additional product management features.
8. **Containerization:** Docker makes the frontend easier to package and run consistently.

## 🎯 Important Concepts Demonstrated

- React Components
- JSX
- Props and State
- React Hooks
- Event Handling
- React Router
- Fetch API
- CRUD Operations
- REST API Integration
- JavaScript ES6+
- CSS Styling
- Responsive Web Design
- Docker
- Git and GitHub

## 🔮 Future Enhancements

- Improve advanced search and filtering.
- Add user login and registration screens.
- Implement role-based UI permissions.
- Improve pagination and filtering integration.
- Add loading indicators and better error handling.
- Enhance mobile responsiveness.
- Deploy the frontend to a cloud hosting platform.

## 👨‍💻 Author

**Srinivas T R**

GitHub: https://github.com/Strategy-200

## 🔗 Related Repository

**Backend:** [FastAPI Product Management Backend](https://github.com/Strategy-200/product-management-backend)

## 📄 License

This project is available for learning and educational purposes.

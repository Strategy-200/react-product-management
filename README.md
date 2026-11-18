# Product Management System

A full-stack web application developed to manage product information through a responsive React frontend and a Python FastAPI backend. The application uses PostgreSQL for data storage, SQLAlchemy for database operations, and Docker for containerization.

## 🚀 Project Overview

The Product Management System is designed to simplify product management through a user-friendly interface and RESTful APIs.

Users can perform product management operations such as creating, viewing, updating, and deleting products. The React frontend communicates with the FastAPI backend, which processes requests and interacts with the PostgreSQL database.

## ✨ Key Features

- **Create Products:** Add new products with relevant information.
- **View Products:** Retrieve and display product information dynamically.
- **Update Products:** Modify existing product details.
- **Delete Products:** Remove products from the database.
- **Search and Filtering:** Find products using available filtering options.
- **Pagination:** Navigate through product records.
- **REST API Integration:** Connect frontend and backend using HTTP requests.
- **Database Management:** Store and retrieve information using PostgreSQL.
- **Data Validation:** Validate application data using Pydantic.
- **Docker Support:** Containerize application components for consistent execution.

## 🏗️ System Architecture

```text
              USER
                |
                v
       REACT.JS FRONTEND
       (JavaScript + CSS)
                |
                | Fetch API / HTTP
                v
        FASTAPI BACKEND
         (Python + REST)
                |
                | SQLAlchemy ORM
                v
        POSTGRESQL DATABASE
```

### Application Workflow

1. The user interacts with the React frontend.
2. React handles user actions and application state.
3. Fetch API sends HTTP requests to FastAPI.
4. FastAPI processes requests and performs business logic.
5. SQLAlchemy communicates with PostgreSQL.
6. PostgreSQL stores and retrieves product information.
7. FastAPI returns JSON responses to the frontend.
8. React updates the user interface.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| JavaScript | Frontend application logic |
| HTML5 | Page structure |
| CSS3 | Styling and responsive design |
| Python | Backend programming |
| FastAPI | REST API development |
| PostgreSQL | Relational database |
| SQLAlchemy | Object-relational mapping |
| Pydantic | Data validation |
| Fetch API | Frontend-backend communication |
| Docker | Containerization |
| Git & GitHub | Version control |

## 🌟 Benefits of the Project

1. Simplifies product management operations.
2. Provides a centralized way to manage product information.
3. Demonstrates full-stack application development.
4. Separates frontend, backend, and database responsibilities.
5. Uses REST APIs for communication between application components.
6. Uses SQLAlchemy for structured database operations.
7. Supports containerized development using Docker.
8. Provides a foundation for future scalability and enhancements.

## 🔮 Future Enhancements

- Advanced product search and filtering.
- Improved pagination.
- User authentication and role-based access control.
- Automated testing.
- Application logging and monitoring.
- Cloud deployment.
- CI/CD pipeline integration.

## 💻 Frontend Repository

**Technology:** React.js, JavaScript, HTML, CSS

The frontend provides the user interface for managing products. It communicates with the FastAPI backend using Fetch API and displays data dynamically.

### Frontend Setup

**1. Clone the repository**

```bash
git clone https://github.com/Strategy-200/react-product-management.git
cd react-product-management
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

**4. Open the application**

```text
http://localhost:5173
```

The actual port may differ depending on your Vite configuration.

### Backend Connection

Make sure the FastAPI backend is running:

```text
http://127.0.0.1:8000
```

The frontend API URLs must point to the running backend, and the backend must allow the frontend origin through CORS.

### Docker

Build the frontend image:

```bash
docker build -t product-management-frontend .
```

Run the container:

```bash
docker run -d -p 5174:80 --name product-management-frontend product-management-frontend
```

This assumes the production frontend is served on port 80 inside the container.

### Related Repository

**Backend:** https://github.com/Strategy-200/product-management-backend

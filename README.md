# React Product Management Frontend

A simple Product Management application built using React and Vite. This project allows users to manage product information through an interactive user interface.

## Features

- **Product List:** Display a list of products with their names and prices.
- **Add Product:** Add new products by entering a name and price.
- **Delete Product:** Remove products from the list.
- **Search Product:** Search for products by name.
- **Product Details:** View the details of a selected product.
- **Input Validation:** Prevent adding products with invalid or empty values.
- **React State Management:** Manage product data and user interactions using React's `useState` hook.

## Tech Stack

- React
- Vite
- JavaScript
- HTML
- CSS

## Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git (optional, for cloning the repository)

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/react-product-management.git
```

Replace `YOUR-USERNAME` with your GitHub username.

### 2. Open the project folder

```bash
cd react-product-management
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## How It Works

The application uses React state to manage products, search queries, form inputs, and selected product details. Product data is stored in memory, so changes are not permanently saved and will reset when the page is refreshed.

## Future Improvements

- Connect to a backend API.
- Store products in a database.
- Add product editing functionality.
- Implement persistent data storage.

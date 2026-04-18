# Express & Sequelize Backend API

This is a simple backend application built with **Node.js, Express, and Sequelize** to demonstrate models, relationships, and CRUD operations.

## Project Setup

This project uses **SQLite** as its database, meaning you do not need to install or run any external database servers (like PostgreSQL or MySQL) to test it.

### Prerequisites
- Node.js (v14 or higher recommended)

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/abdalluhjber/asseweb22.git
   cd asseweb22
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run Sequelize Migrations to create the database tables:
   ```bash
   npx sequelize-cli db:migrate
   ```

4. Start the server:
   ```bash
   npm start
   # or for development: npm run dev
   ```
   The server will start at `http://localhost:3000`.

## Available APIs

This application manages `Authors` and `Books`. The relationship is **One-to-Many**: An Author has many Books, and a Book belongs to one Author.

### Author Endpoints

| Method | Endpoint      | Description           |
|--------|--------------|-----------------------|
| GET    | `/authors`    | Get all authors       |
| GET    | `/authors/:id`| Get author by ID      |
| POST   | `/authors`    | Create a new author   |
| PUT    | `/authors/:id`| Update an author      |
| DELETE | `/authors/:id`| Delete an author      |

**Sample POST Request (`/authors`):**
```json
{
  "name": "Jane Austen",
  "bio": "English novelist known primarily for her six major novels."
}
```

### Book Endpoints

| Method | Endpoint      | Description           |
|--------|--------------|-----------------------|
| GET    | `/books`      | Get all books         |
| GET    | `/books/:id`  | Get book by ID        |
| POST   | `/books`      | Create a new book     |
| PUT    | `/books/:id`  | Update a book         |
| DELETE | `/books/:id`  | Delete a book         |

**Sample POST Request (`/books`):**
```json
{
  "title": "Pride and Prejudice",
  "publishedYear": 1813,
  "authorId": 1
}
```
*(Ensure an Author with ID 1 exists before creating a book linked to them)*
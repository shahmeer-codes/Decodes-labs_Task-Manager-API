# Task Manager API

A simple REST API built with Node.js and Express.js for managing tasks. This project was developed as part of the Decodes Lab Backend API Development Task.

## Features

- Get all tasks
- Get a task by ID
- Create a new task
- Input validation
- JSON responses
- MVC architecture

## Technologies Used

- Node.js
- Express.js
- Nodemon
- REST API

## Project Structure

```text
task-manager-api/
│
├── controllers/
│   └── taskController.js
│
├── routes/
│   └── taskRoutes.js
│
├── middleware/
│   └── validateTask.js
│
├── data/
│   └── tasks.js
│
├── server.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd task-manager-api
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

Server will run on:

```text
http://localhost:5000
```

## API Endpoints

### Home Route

```http
GET /
```

Response:

```json
{
  "message": "Task Manager API Running"
}
```

### Get All Tasks

```http
GET /api/tasks
```

### Get Task By ID

```http
GET /api/tasks/:id
```

Example:

```http
GET /api/tasks/1
```

### Create Task

```http
POST /api/tasks
```

Request Body:

```json
{
  "title": "Build Task Manager API",
  "status": "Pending"
}
```

## Validation Rules

- Title is required.
- Status must be either:
  - Pending
  - Completed

## Sample Success Response

```json
{
  "success": true,
  "message": "Task created successfully"
}
```

## Learning Outcomes

- Backend API Development
- Express Routing
- Middleware
- Request Handling
- Response Handling
- Data Validation
- REST API Concepts
- Server-side Logic

## Author

Shahmeer Arshad

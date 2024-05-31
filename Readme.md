# E-Commerce App Backend

## Overview

This is a fully-featured E-Commerce Application built with TypeScript, Express.js, PostgreSQL, and Prisma. The project aims to provide a robust and scalable solution for managing online store operations, including product listings, user management, and order processing.

## Features

- User authentication and authorization
- Product listing and management
- Shopping cart functionality
- Order processing and management

## Tech Stack

- **Backend:**
  - TypeScript
  - Express.js
  - PostgreSQL
  - Prisma
- **Tools and Libraries:**
  - Nodemon
  - Jest (for testing)
  - ESLint (for code linting)
  - Prettier (for code formatting)

## Getting Started

### Prerequisites

- Node.js (version v19.6.0)
- PostgreSQL (version 16)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/theeeep/ecommerce-app-backend.git
   cd ecommerce-app-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   - Create a PostgreSQL database
   - Update the `.env` file with your database connection details:

     ``` bash
     DATABASE_URL=postgresql://user:password@localhost:5432/ecommerce-backend?schema=public"
     ```

4. Run the Prisma migrations to set up the database schema:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

### Scripts

- `npm start:dev`: Starts the development server
- `npm run start:prod`: Builds the project for production
- `npm run build`: Starts the built project
- `npm test`: Runs tests using Jest

## API Endpoints

### Authentication

- **POST /api/auth/signup**: Register a new user
- **POST /api/auth/login**: Login a user

### Products

- **GET /api/products**: Get all products
- **GET /api/products/:id**: Get a product by ID
- **POST /api/products**: Create a new product
- **PUT /api/products/:id**: Update a product by ID
- **DELETE /api/products/:id**: Delete a product by ID

### Orders

- **GET /api/orders**: Get all orders
- **GET /api/orders/:id**: Get an order by ID
- **POST /api/orders**: Create a new order
- **PUT /api/orders/:id**: Update an order by ID
- **DELETE /api/orders/:id**: Delete an order by ID

## Project Structure

``` bash
├── README.md
├── dist
│   └── index.js
├── eslint.config.mjs
├── jest.config.ts
├── nodemon.json
├── package-lock.json
├── package.json
├── prisma
│   ├── migrations
│   └── schema.prisma
├── src
│   ├── config
│   ├── controllers
│   ├── error-handler.ts
│   ├── exceptions
│   ├── index.ts
│   ├── middlewares
│   ├── routes
│   ├── schema
│   └── types
├── tsconfig.build.json
└── tsconfig.json
```

12 directories, 12 files

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the coding style and include relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, feel free to contact me at [itz.deeepak@gmail.com] or open an issue on GitHub.

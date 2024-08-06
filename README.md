# Run the project

This project is a React application that uses TypeScript and Vite as a build tool.

## Backend - Pre-requisite

The application relies on it's backend to be running locally, you must have the backend API running on `http://localhost:3000`.

You can download the backend code here: [https://github.com/tobywinter/nestjs-comms-backend](https://github.com/tobywinter/nestjs-comms-backend).

Please ensure that the backend API is running before attempting to run the frontend.

To run the project, follow these steps:

1. Install yarn on your machine if you haven't already.
2. Open a terminal in the project directory.
3. Run the command `yarn` to install the project dependencies.
4. Once the dependencies are installed, run the command `yarn dev` to start the development server.
5. The application should now be running on `http://localhost:5173`.
6. Visit the welcome page with a userId e.g. `http://localhost:5173/welcome/03e462d8-89f3-4d48-8f09-d6110c3e9bea` to view the page.
7. Replace the UUID with any valid UUID.

# AI Exam Paper Generator

## Installation

### Backend Setup

1. Navigate to the `backend` folder:

    ```
    cd backend
    ```

2. Install backend dependencies:

    ```
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your Gemini API key:

    ```
    GEMINI_API_KEY=your_google_gemini_api_key_here
    PORT=5000
    ```

### Frontend Setup

1. Navigate to the `frontend` folder:

    ```
    cd frontend
    ```

2. Install frontend dependencies:

    ```
    npm install
    ```

3. Ensure Tailwind CSS is installed (using version 3 for compatibility):

    ```
    npm install -D tailwindcss@3 postcss autoprefixer
    npx tailwindcss@3 init -p
    ```

## Running the Project Locally

### Start Backend Server

In the `backend` directory, run:

node server.js
This starts the backend API server at `http://localhost:5000`.

### Start Frontend Application

In the `frontend` directory, run: npm start

This starts the React app in development mode at `http://localhost:3000`.

## Environment Variables

- The Gemini API key **must be placed only** in the backend `.env` file as:

    ```
    GEMINI_API_KEY=your_google_gemini_api_key_here
    ```

With this setup, you will be able to run the full application locally, using AI to generate primary school math exam questions.

If you encounter issues with Tailwind CSS, ensure you are using Tailwind v3 with the correct PostCSS setup.


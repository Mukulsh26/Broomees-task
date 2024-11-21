# Node.js App on Vercel

A simple Node.js app featuring REST APIs, static file serving, and database integration. Deployed on Vercel.

## Project Structure

project/ ├── public/ # Static assets ├── src/ # Core application files │ ├── app.js # Main server file │ ├── db.js # Database setup │ └── routes/ # API routes ├── views/ # Frontend HTML ├── package.json # Dependencies ├── vercel.json # Vercel config

## Features

- Serves static files and HTML.
- REST API for handling form submissions.
- Database connection setup.

## Setup

1. Clone the repo and install dependencies:
   ```bash
   git clone <repo-url>
   cd project
   npm install

2. Start the server locally:
   npm start

3. Visit http://localhost:3000.


## API Endpoints
GET / - Serves index.html.
POST /form - Handles form submissions.

## Environment Variables
Set variables in the Vercel dashboard for sensitive data like DB credentials.

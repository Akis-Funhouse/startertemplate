
# Next.js Starter Template

A reusable starter template built with Next.js, shadcn/ui, Better Auth and SQLite.

## Whats used

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Better Auth
- better-sqlite3

## Features

- User registration
- Email and password login
- SQLite database
- Authentication sessions
- Protected dashboard
- User information display
- Logout functionality

## Installation

### 1. Clone the repository

git clone [YOUR_REPOSITORY_URL](https://github.com/Akis-Funhouse/startertemplate)

### 2. Navigate into the project

cd startertemplate

### 3. Install dependencies

npm install

### 4. Configure environment variables

Copy the content of the example .env file and paste it into your actual .env file

Generate a secret:
npx auth secret

Add the generated secret to your .env file.

### 5. Initialize the database

npx auth@latest migrate

### 6. Start the development server

npm run dev

Open http://localhost:3000

## Routes

- / - Choose wether to Login or Register
- /login - Login page
- /register - Registration page
- /dashboard - Protected dashboard

## Database

The app uses SQLite through better-sqlite3
Better Auth manages users, accounts and sessions.

## Authentication

Better Auth handles registration, login, session management and logout.


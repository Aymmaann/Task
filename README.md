# DeetX

DeetX is a user management web application built with React that allows users to sign up, log in, and view a detailed list of users. The application features authentication, user registration, and a dynamic user details page with search and sorting capabilities.

## 🚀 Features

- User Authentication (Login/Signup)
- Protected Routes
- User Details Dashboard
- Search and Filter Functionality
- Responsive Design

## 📋 Prerequisites
Before you begin, ensure you have the following installed:

- Node.js (v16 or later)
- npm (v8 or later)
- Git

##  Installation
1. Clone the Repository
```bash
git clone https://github.com/yourusername/deetx.git
cd deetx
```

2. Install dependencies:
   ```bash
   npm install
   ```


## Running the Application
### Development Mode
```bash
npm run dev
```
This will start the development server, typically at http://localhost:5173

### Build for Production
```bash
npm run preview
```

## 📂 Project Structure
```bash
deetx/
│
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # Reusable React components
│   ├── context/          # React context for state management
│   ├── pages/            # Page components
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Details.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── public/               # Public assets
├── index.html
├── package.json
└── README.md
```

## 🔐 Authentication
The application uses a simple authentication mechanism:

Users can sign up with an email and password
Credentials are stored in localStorage
Protected routes prevent unauthorized access

### Login Credentials

No specific credentials are required
The application allows signup and simulates login
Sample email format: example@email.com
Password must be at least 8 characters

## 🎨 Tailwind CSS
The project uses Tailwind CSS for styling. Custom classes are defined in the configuration to support the design.

## 📦 Key Dependencies
- React
- React Router
- Tailwind CSS
- Context API for state management

## 🌐 API Integration

User data is fetched from https://dummyjson.com/users
Simulated authentication using localStorage

## 🚧 Limitations

Authentication is client-side only
No backend integration
User data is fetched from a dummy API


## Contributing
This project is still in development. Contributions and suggestions are welcome!

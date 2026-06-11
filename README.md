# Bhanuka Janappriya - Modern MERN Portfolio

A premium, Apple-inspired, mobile-first, responsive portfolio website built with the MERN stack.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, Nodemailer
- **Design:** Apple-inspired aesthetics, Glassmorphism, Dark Mode Default

## Project Structure

```text
bhanuka_janappriya_portfolio/
├── client/             # React + Vite frontend
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── context/    # Theme and Data context
│   │   ├── sections/   # Portfolio sections (Hero, About, etc.)
│   │   └── services/   # API client
├── server/             # Node.js + Express backend
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API endpoints
│   ├── controllers/    # Business logic
│   └── scripts/        # Data seeding scripts
```

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB Atlas account (or local MongoDB)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BhanukaJanappriya/bhanuka_janappriya_portfolio.git
   cd bhanuka_janappriya_portfolio
   ```

2. **Backend Setup:**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```
   Seed the database with initial data:
   ```bash
   npm run seed # You may need to add this script to package.json
   ```

3. **Frontend Setup:**
   ```bash
   cd ../client
   npm install
   ```
   Create a `.env` file in the `client` directory (optional, defaults to localhost:5000):
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

### Running the Project

- **Start Backend:**
  ```bash
  cd server
  npm run dev # Ensure nodemon is configured
  ```
- **Start Frontend:**
  ```bash
  cd client
  npm run dev
  ```

## Future Improvements

- [ ] Add a dashboard for managing portfolio content without code.
- [ ] Integrate more GitHub API statistics.
- [ ] Add a blog section.
- [ ] Implement multi-language support.

## License

This project is licensed under the MIT License.

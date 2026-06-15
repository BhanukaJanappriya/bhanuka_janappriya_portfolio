# Bhanuka Janappriya - Modern MERN Portfolio

A premium, Apple-inspired, mobile-first, responsive portfolio website built with the MERN stack. Features custom local video walkthroughs of Adobe Stock and Pinterest design portfolios, interactive project showcases, custom logo mappings, and dynamic theme switching.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Key Features

- 📱 **Apple-Inspired Responsive Design:** High-end glassmorphism aesthetic with seamless transitions between Light and Dark modes.
- 🎬 **Creative Portfolios Walkthrough:** Dedicated "Designs" section containing high-performance browser frame video walkthroughs of your Adobe Stock and Pinterest portfolios (optimized with local `.mp4` loop/autoplay show-reels).
- 🎨 **Dynamic Project Cards:** Detailed card views with custom-designed project illustrations, tech tags, and overlay links for GitHub & live demos.
- 💼 **Custom Logo Mapping:** Native rendering of official logos for **University of Peradeniya**, **CSUP**, **SIRED**, **We Lead**, **DataEx**, and **Adobe** inside the grouped and chronological experience sections.
- ♟️ **Live Chess.com Stats Integration:** Beautiful interactive dashboard fetching and displaying live ratings, peak ratings, and match records (wins, draws, losses) directly from Chess.com's PubAPI with cached local fallbacks.
- 🏷️ **BJ Branding Logo:** Custom vector branding squircle icon ("B" in blue, "J" in white on a sleek black gradient background) integrated as the website favicon and navbar/footer brand logo.
- ⚡ **Expanded Skill Arsenal:** Dynamic icon rendering for newly added skills, including **Docker**, **Onshape**, **CapCut**, **Canva**, **Microsoft Office**, **Excel**, and **PowerPoint**.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, Axios, Lucide React
- **Backend:** Node.js, Express, MongoDB, Mongoose, Nodemailer
- **Design:** Modern glassmorphism, responsive viewports, default dark theme with customized light mode gradient overrides.

## Project Structure

```text
bhanuka_janappriya_portfolio/
├── client/             # React + Vite frontend
│   ├── src/
│   │   ├── assets/     # Media, icons, and local video walkthrough files
│   │   ├── components/ # Reusable UI components (Navbar, Footer, etc.)
│   │   ├── context/    # Theme and Data context provider hooks
│   │   ├── sections/   # Portfolio sections (Hero, About, Experience, AdobeStock, etc.)
│   │   └── services/   # Axios API client setup
├── server/             # Node.js + Express backend
│   ├── models/         # Mongoose DB schemas (Project, Skill, Experience, etc.)
│   ├── routes/         # Express API endpoint router controllers
│   ├── controllers/    # API business logic handlers
│   └── scripts/        # Database seeding scripts (seedData.js)
```

## Getting Started

### Prerequisites

- Node.js installed locally
- MongoDB Atlas account (or local MongoDB community instance)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BhanukaJanappriya/bhanuka_janappriya_portfolio.git
   cd bhankua_janappriya_portfolio
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
   Seed the database with initial projects and skills data:
   ```bash
   node scripts/seedData.js
   ```

3. **Frontend Setup:**
   ```bash
   cd ../client
   npm install
   ```
   Create a `.env` file in the `client` directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

### Running the Project

- **Start Backend Server:**
  ```bash
  cd server
  npm run dev
  ```
- **Start Frontend Client:**
  ```bash
  cd client
  npm run dev
  ```

## Future Improvements

- [ ] Add an admin dashboard for managing projects and skills dynamically from the browser.
- [ ] Integrate real-time GitHub metrics.
- [ ] Implement a blog section for articles and tutorials.
- [ ] Multi-language support.

## License

This project is licensed under the MIT License.

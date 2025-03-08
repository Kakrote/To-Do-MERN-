# To-Do App (MERN Stack)

## 🚀 Live Demo
Check out the live demo of the project: [To-Do App](https://to-do-mern-six.vercel.app/)

## 📌 About the Project
This is a basic To-Do app built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to manage their tasks efficiently with key features like adding, updating, and deleting tasks.

## 🔥 Features
- User authentication (Login/Registration)
- Add new tasks with priority levels
- Update existing tasks
- Delete tasks
- Real-time task updates using Redux and Redux Thunk
- Local storage integration for task persistence

## 🛠️ Technologies Used
- **Frontend:** React.js, Redux, Redux Thunk
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API:** Axios for HTTP requests
- **Hosting:** Vercel

## 📂 Project Structure
- **client/** — Contains the React frontend
- **server/** — Contains the Node.js and Express backend
- **models/** — Mongoose models for tasks and users
- **routes/** — API routes for task and user operations
- **controllers/** — Logic for handling requests and responses

## 🚧 How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/Kakrote/To-Do-MERN-.git
```

### 2. Install dependencies
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 3. Set up environment variables
Create a `.env` file in the `server/` directory and add your MongoDB URI and JWT secret:
```plaintext
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Run the app
```bash
# Run client and server concurrently
npm run dev
```
The app will be available at `http://localhost:3000`

## 📧 Contact
For any questions or suggestions, feel free to reach out!

---

> "Stay organized, stay productive!"


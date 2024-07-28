require("dotenv").config();
const express = require("express");
const cors = require("cors"); 
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3000;
const chatRoutes = require("./routes/chatRoutes");
const officeRoutes = require("./routes/office");  // New import
const movableAssetRoutes = require("./routes/movableAssets");  // New import
const immovableAssetRoutes = require("./routes/immovableAsset");  // New import

connectDB();

// Middlewares
app.use(express.json({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Chatbot API!");
});
app.use('/api/chat', chatRoutes);
app.use('/api/offices', officeRoutes);  
app.use('/api/movableAssets', movableAssetRoutes);  
app.use('/api/immovableAssets', immovableAssetRoutes);  // New route

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

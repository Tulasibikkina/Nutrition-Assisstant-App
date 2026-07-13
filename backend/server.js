// 1. Import packages
const express = require("express");
const dotenv = require("dotenv");

// 2. Load env variables
dotenv.config();

// 3. Create app ✅ IMPORTANT
const app = express();

// 4. Middleware
app.use(express.json());

// 5. Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// 6. Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
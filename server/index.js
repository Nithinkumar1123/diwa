const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// User Schema
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model("User", userSchema);

// Routes
app.post("/api/users", async (req, res) => {
  try {
    const user = new User({ name: req.body.name });
    await user.save();
    res.json({ message: "Name saved", user });
  } catch (error) {
    res.status(500).json({ error: "Error saving name" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

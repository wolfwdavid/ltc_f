const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = []; // Temporary storage (use a database in production)

app.post("/register", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    users.push({ username, password });
    res.json({ message: "User registered successfully!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));

import express from "express"

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.post("/api/data", (req, res) => {
    const data = req.body;
    console.log("Received data:", data);
    res.json({ message: "Data received successfully!", receivedData: data });
});

app.post("/api/data/moredata/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    console.log("Received data:", data);
    console.log("Received ID:", id);
    res.json({ message: "Data received successfully!", receivedData: data });
});

app.put("/api/data/update/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    console.log("Received data:", data);
    console.log("Received ID:", id);
    res.json({ message: "Data updated successfully!", receivedData: data });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
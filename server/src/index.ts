import express from "express";

const app = express();

const PORT: number = 3001;

const corsOptions = {
  credentials: true,
  methods: ["GET", "POST", "DELETE", "PATCH"],
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
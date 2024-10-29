import express from "express";
import { UserRoutes } from "./routes/user";
import { IpInfoRoutes } from "./routes/ipinfo";
import cors from "cors";

const app = express();

const PORT: number = 3001;

app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:5173", "http://localhost:3001"],
  methods: ["GET", "POST", "DELETE", "PATCH"],
};
app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/user", UserRoutes);
app.use("/ip", IpInfoRoutes);

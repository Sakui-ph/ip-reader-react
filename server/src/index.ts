import express from "express";
import { UserRoutes } from "./routes/user";
import { IpInfoRoutes } from "./routes/ipinfo";

const app = express();

const PORT: number = 3001;

app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  credentials: true,
  methods: ["GET", "POST", "DELETE", "PATCH"],
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/user", UserRoutes);
app.use("/ip", IpInfoRoutes);

import express from "express";
import clientsRouter from "./routes/clients.routes.js";
import usersRoutes from "./routes/usersRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

await connectDB();
app.use("/clients", clientsRouter);
app.use("/users", usersRoutes);
app.listen(3000, () => {
  console.log("servidor iniciado ");
});

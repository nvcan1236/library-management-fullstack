import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import connectDatabase from "./app/configs/db.config";
import router from "./app/api/index.api";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { errorHandler, notFound } from "./app/middleware/middleware";

dotenv.config();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use("/api", router);
app.use(notFound);
app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

connectDatabase();

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

app.use(express.static("public")) 

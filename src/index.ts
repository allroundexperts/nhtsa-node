import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import { setRoutes } from "./routes";

const app = express();

app.use(bodyParser.json());

setRoutes(app);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ error: err.message });
});

app.listen(8888, () => console.log("Server listening on port: 8888"));

import "dotenv/config";
import express from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);


app.listen(8080, ()=>console.log("Roading on PORT 8080 🚀🚀"))
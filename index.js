//middleware
import bodyParser from "body-parser";
import cors from "cors";
import pkg from "express";
import * as dotenv from "dotenv";

dotenv.config();
//route import
import mainRoutes from "./routes/mainRoutes.js";


const app = pkg();

app.use(cors({ credentials: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("", mainRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is listening at ${process.env.PORT}`);
});

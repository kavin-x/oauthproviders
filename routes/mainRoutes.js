import pkg from "express";
import oauthRoutes from "./oauthRoutes.js";
import { FigmaOauth } from "../controller/FigmaOauth.js";

const mainRoutes = pkg.Router();

mainRoutes.get('/figma',FigmaOauth)
mainRoutes.use("/oauth",oauthRoutes)

export default mainRoutes;

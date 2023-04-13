import pkg from "express";
import { figmaOauthCallback } from "../controller/figmaCallback.js";

const oauthRoutes = pkg.Router();

oauthRoutes.get("/callback",figmaOauthCallback)


export default oauthRoutes;

import * as dotenv from "dotenv";
import open from "open";

dotenv.config();

export const AngularOauth = () => {
  open(
    `https://www.figma.com/oauth?client_id=${process.env.FIGMA_CLIENT_ID}&redirect_uri=http://localhost:9000/oauth/callback&scope=file_read&state=:state&response_type=code`
  );
};
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

export const figmaOauthCallback = async (req, res) => {
  try {
    await axios
      .post("https://www.figma.com/api/oauth/token?", {
        client_id: process.env.FIGMA_CLIENT_ID,
        client_secret: process.env.FIGMA_CLIENT_SECRET,
        redirect_uri: "http://localhost:9000/oauth/callback",
        code: req.query.code,
        grant_type: "authorization_code",
      })
      .then(function (response) {
        console.log(response.status, response.data);
        if(response.status==200){
            // When you call the API, pass a Bearer authorization header like so:

            // $ curl -sH 'Authorization: Bearer <TOKEN>'
            // 'https://api.figma.com/v1/files/...'

            // ENPOINNTS

            // GET file — returns file info in JSON.
            // GET file nodes — returns individual node info.
            // GET file images — returns images for specific elements.
            // GET file versions — returns the version history for a file.
            // GET image fills — returns download links for images in the file.
            // GET comments — returns a list of file comments.
            // POST comments — posts a comment.
            // GET me — returns authenticated user info.
            // GET team projects — returns a list of projects.
            // GET project files — returns a list of files in a project.

            //TO GET REFRESH TOKEN

            // POST https://www.figma.com/api/oauth/refresh?
            // client_id=:client_id&
            // client_secret=:client_secret&
            // refresh_token=:refresh_token
        }
      });
  } catch (error) {}
};

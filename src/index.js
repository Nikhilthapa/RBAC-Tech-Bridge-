// const app = require("./app");
// require("dotenv").config({ silent: true });
// const server = () => {
//   try {
//     app
//       .listen(3001, () => {
//         console.log(`http://localhost:${3001}`);
//       })
//       .on("error", () => {
//         console.log("Unable to initialise server.");
//         process.exit(1);
//       });
//   } catch (error) {
//     console.log("Database Connection Failed", error.message);
//     process.exit(1);
//   }
// };
// server();
const fs = require("fs");
const https = require("https");
const app = require("./app");
require("dotenv").config({ silent: true });

const server = () => {
  try {
    // SSL options
    const options = {
      cert: fs.readFileSync("./src/cert/fullchain.pem"), // path to your key
      key: fs.readFileSync("./src/cert/privkey.pem"), // path to your cert
    };

    https
      .createServer(options, app)
      .listen(3001, () => {
        console.log(`https://localhost:3001`);
      })
      .on("error", (err) => {
        console.log("Unable to initialise server.", err.message);
        process.exit(1);
      });
  } catch (error) {
    console.log("Database Connection Failed", error.message);
    process.exit(1);
  }
};

server();

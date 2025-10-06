const app = require("./app");
require("dotenv").config({ silent: true });
const server = () => {
  try {
    app
      .listen(3001, () => {
        console.log(`http://localhost:${3001}`);
      })
      .on("error", () => {
        console.log("Unable to initialise server.");
        process.exit(1);
      });
  } catch (error) {
    console.log("Database Connection Failed", error.message);
    process.exit(1);
  }
};
server();

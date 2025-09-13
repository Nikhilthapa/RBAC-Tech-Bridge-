const app = require("./app");
require("dotenv").config({ silent: true });

const server = () => {
  try {
    app
      .listen(process.env.PORT, () => {
        console.log(`http://${process.env.HOST}:${process.env.PORT}`);
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

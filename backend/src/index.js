require("dotenv").config();

const app = require("./app");
require("./database");

// Server Logic
async function main() {
  await app.listen(app.get("port"));
  console.log("Server listening in port", app.get("port"));
}

main();

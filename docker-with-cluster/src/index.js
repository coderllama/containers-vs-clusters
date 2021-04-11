const app = require("express")();
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) cluster.fork();
  console.log(`Master process on port ${process.env.PORT}`);
} else {
  app.get("/", async (req, res) => {
    console.log("received request to /");
    res.send("Hello World");
  });
  app.listen(3000);
}

const express = require('express')
const app = express();
const numCPUs = require("os").cpus().length;
const cluster = require("cluster");

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const PORT = process.env.PORT || 3000;
  app.get("/test", async (req, res) => {
    res.send("Message from port" + PORT);
  });

  app.get("/exit", async (req, res) => {
    process.exit();
  });
  app.listen(PORT, console.log(`Listening on port ${PORT}`));
  console.log(`Worker ${process.pid} started`);
}

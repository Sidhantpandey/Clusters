import cluster from "node:cluster";
import express from "express";
import "dotenv/config";
import os from "node:os";
import process from 'node:process';


const totalCpus = os.cpus().length;
// console.log(totalCpus);


// if cluster is primary then we will make the workers 

if (cluster.isPrimary) {
//   console.log(`Primary ${process.pid} is running`);
  for (let i = 0; i < totalCpus; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const port = process.env.PORT || 4000;
  app.get("/", (req, res) => {
    return res.json({ message: `Hello from server ${process.pid}` });
  });
  app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
  });
}


// Now the user load will get distributed on the 4 instances
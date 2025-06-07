// sum_cluster.js
const cluster = require('cluster');
const os = require('os');

const totalNumbers = 5000923823929398239298389232398893298328932000;
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} running.`);
  let sum = 0;
  let finishedWorkers = 0;

  // Divide range into equal chunks for each CPU
  const numbersPerWorker = Math.floor(totalNumbers / numCPUs);

  for (let i = 0; i < numCPUs; i++) {
    const start = i * numbersPerWorker + 1;
    // Adjust end for the last worker to cover all numbers
    const end = (i === numCPUs - 1) ? totalNumbers : (i + 1) * numbersPerWorker;

    const worker = cluster.fork();

    worker.send({ start, end });

    worker.on('message', (partialSum) => {
      console.log(`Worker ${worker.process.pid} finished: ${partialSum}`);
      sum += partialSum;
      finishedWorkers++;

      if (finishedWorkers === numCPUs) {
        console.log(`Final Sum (1 to ${totalNumbers}): ${sum}`);
      }
    });
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} exited.`);
  });

} else {
  process.on('message', ({ start, end }) => {
    let partialSum = 0;
    for (let i = start; i <= end; i++) {
      partialSum += i;
    }
    process.send(partialSum);
    process.exit();
  });
}

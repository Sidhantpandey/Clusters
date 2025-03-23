# Node.js Cluster Module

The **Cluster** module allows you to create multiple processes to handle concurrent tasks more efficiently. It is particularly useful for utilizing multi-core systems and improving the scalability of Node.js applications.

## Key Features
- Spawns child processes (workers) that share server ports.
- Enables handling concurrent requests across multiple cores.
- Simple API to manage worker processes.

### Key Properties
- `cluster.isPrimary`: Checks if the current process is the primary.
- `cluster.isWorker`: Checks if the current process is a worker.

### Key Methods
- `cluster.fork([env])`: Forks a new worker process.
- `cluster.on(event, listener)`: Listens for cluster events (e.g., `exit`, `online`).


## When to Use
- Applications requiring high performance under heavy traffic.
- Scenarios where multi-threading or parallelism improves throenshot
## How to start the server
- Run (npm run dev)

![image](https://github.com/user-attachments/assets/4a57af09-e314-42f7-b5b7-5901a69c159d)

Open for Contributions. 



const { server } = require("./server");

const port = process.env.DEV_PORT;

server.listen(port, async () => {
  console.log(`Server is Running on Port : ${port} `);
});

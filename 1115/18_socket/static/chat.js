let socket = io.connect();

socket.on("connect", () => {
  console.log("Client Socket Connected>>", socket.id);
});

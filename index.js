const express = require("express");
const app = express();
const PORT = 4000;
function handleListening() {
  console.log(`Listeng on: http://localhost:${PORT}`);
}
app.listen(4000, handleListening);

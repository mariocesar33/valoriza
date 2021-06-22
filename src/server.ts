import express from "express";

const app = express();

app.get("/test", (request, response) => {
  return response.send("Ola Mundo!")
})

app.post("/", (request, response) => {
  return response.json({ message: "Ola json!" })
})

app.listen(3333, () => console.log("Servidor ligado."));
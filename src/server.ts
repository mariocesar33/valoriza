import express from "express";

const app = express();

import "./database";


app.listen(3333, () => console.log("Servidor ligado."));
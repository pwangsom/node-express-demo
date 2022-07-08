import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const router = express.Router();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

// Port
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server running is on ${port}...`));
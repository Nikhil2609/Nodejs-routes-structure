import express from "express";
import { router } from "./routes/index.js";
const app = express();

// Use the routes defined in index.js
app.use('/', router);

app.get('*', (req, res, next) => {
  res.status(200).json({ message: 'bad request' })
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
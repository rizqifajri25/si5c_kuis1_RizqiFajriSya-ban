const express = require('express');
const app = express();
const PORT = 3000;

// Middleware agar req.body (JSON) dapat dibaca
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h1>Hello DevOps, Hello World!</h1><p>Ez egy egyszerű HTTP-n elérhető alkalmazás, beadandóhoz.</p>');
});

app.listen(PORT, () => {
  console.log(`Az alkalmazás fut a http://localhost:${PORT} címen...`);
  console.log('A kiszolgáló sikeresen elindult.');
});
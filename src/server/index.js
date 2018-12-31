const express = require('express');

const app = express();

app.use(express.static('dist'));

app.get('/test', (req, res) => {
  res.send({ text: "Hello world!" });
});

app.listen(8081, () => console.log('Listening on port 8081!'));

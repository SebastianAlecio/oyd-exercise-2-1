const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send(`
    <h1>Session Demo</h1>
    <p><b>APP_ENV:</b> ${process.env.APP_ENV || 'not set'}</p>
    <p><b>APP_NAME:</b> ${process.env.APP_NAME || 'not set'}</p>
    <p><b>LOG_LEVEL:</b> ${process.env.LOG_LEVEL || 'not set'}</p>
  `);
});
app.listen(port, () => console.log(`Listening on port ${port}`));

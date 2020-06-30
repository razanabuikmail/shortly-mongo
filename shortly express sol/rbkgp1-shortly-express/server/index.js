const app = require('./app.js');
const db = require('./db');
const port = process.env.PORT || 4568;

app.listen(port, () => {
  console.log(`Shortly is listening on ${port}`);
});

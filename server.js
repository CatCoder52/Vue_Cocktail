const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

const pathVariable = path.resolve();
const staticFileMiddleware = express.static(path.join(`${pathVariable}/dist`));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true,
}));
app.use(staticFileMiddleware);

app.get('/', (req, res) => {
  res.render(path.join(`${pathVariable}/dist/index.html`));
});

const server = app.listen(process.env.PORT || 3000, () => {
  const { port } = server.address();
  console.log('App now running on port', port);
});

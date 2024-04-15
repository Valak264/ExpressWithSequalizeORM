/* eslint-disable no-console */
const { express } = require('./sequelize');
const { router } = require('./routes');

const app = express();
const port = 3000;
const host = 'localhost';

app.use(router);
app.listen(port, host, () => console.log(`Server running on ${host}:${port}`));

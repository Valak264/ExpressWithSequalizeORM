const { express } = require('./sequelize');
const {
  insert,
  selectAll,
  selectOne,
  edit,
  deleteOne,
} = require('./crud');
const { Book } = require('./model');

const router = express.Router();
router.use(express.json());
router.post('/books', async (req, res) => {
  const { title, publisher, author } = req.body;
  await insert(Book, { title, publisher, author });
  res.send('Data Inserted !');
});

router.get('/books', async (req, res) => {
  let data = await selectAll(Book);
  data = JSON.stringify(data);
  res.send(data);
});

router.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  let data = await selectOne(Book, id);
  data = JSON.stringify(data);
  res.send(data);
});

router.patch('/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, publisher, author } = req.body;
  await edit(Book, id, { title, publisher, author });
  res.send('Update Successfully !');
});

router.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  await deleteOne(Book, id);
  res.send('Deleted Succesfully');
});

module.exports = { router };

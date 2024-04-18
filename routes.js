/* eslint-disable no-console */
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
  try {
    const { title, publisher, author } = req.body;
    await insert(Book, { title, publisher, author });
    res.send('Data Inserted !');
  } catch (error) {
    console.error(error.message);
  }
});

router.get('/books', async (req, res) => {
  try {
    let data = await selectAll(Book);
    data = JSON.stringify(data);
    res.send(data);
  } catch (error) {
    console.error(console.error);
  }
});

router.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let data = await selectOne(Book, id);
    data = JSON.stringify(data);
    res.send(data);
  } catch (error) {
    console.error(error.message);
  }
});

router.patch('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, publisher, author } = req.body;
    await edit(Book, id, { title, publisher, author });
    res.send('Update Successfully !');
  } catch (error) {
    console.error(error.message);
  }
});

router.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteOne(Book, id);
    res.send('Deleted Succesfully');
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = { router };

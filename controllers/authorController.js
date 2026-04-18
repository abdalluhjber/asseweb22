const { Author, Book } = require('../models');

// Create an Author
exports.createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Authors
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll({
      include: [{ model: Book, as: 'books' }]
    });
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Author by ID
exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id, {
      include: [{ model: Book, as: 'books' }]
    });
    if (author) {
      res.status(200).json(author);
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an Author
exports.updateAuthor = async (req, res) => {
  try {
    const [updated] = await Author.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAuthor = await Author.findByPk(req.params.id);
      res.status(200).json(updatedAuthor);
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an Author
exports.deleteAuthor = async (req, res) => {
  try {
    const deleted = await Author.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const express = require('express');
const Item = require('../model/Item');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/', async (req, res) => {
  const { name, category, quantity } = req.body;

  const newItem = new Item({ name, category, quantity });

  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.put('/:id', async (req, res) => {
  const { name, category, quantity } = req.body;
  
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id, 
      { name, category, quantity },
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

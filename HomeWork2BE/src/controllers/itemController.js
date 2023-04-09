const itemService = require('../services/itemService');

async function createItem(req, res) {
  try {
    const shoppingListId = req.params.id;
    const item = req.body;
    const shoppingList = await itemService.createItem(shoppingListId, item);
    res.status(201).send(shoppingList);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getAllItems(req, res) {
  try {
    const shoppingListId = req.params.id;
    const items = await itemService.getAllItems(shoppingListId);
    res.send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function markItemAsPurchased(req, res) {
  try {
    const shoppingListId = req.params.id;
    const itemId = req.params.item_id;
    const shoppingList = await itemService.markItemAsPurchased(shoppingListId, itemId);
    res.send(shoppingList);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteItem(req, res) {
  try {
    const shoppingListId = req.params.id;
    const itemId = req.params.item_id;
    const deletedItem = await itemService.deleteItem(shoppingListId, itemId);
    res.send(deletedItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  createItem,
  getAllItems,
  markItemAsPurchased,
  deleteItem,
};

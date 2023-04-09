const shoppingListService = require('../services/shoppingListService');

async function createShoppingList(req, res) {
  try {
    const shoppingList = await shoppingListService.createShoppingList(req.requestedObject.userId, req.body);
        res.status(201).send(shoppingList);
  } catch (error) {
    res.send(error);
  }
}

async function getAllShoppingLists(req, res) {
  try {
    const shoppingLists = await shoppingListService.getAllShoppingLists(req.requestedObject.userId);
    res.send(shoppingLists);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getShoppingListById(req, res) {
  try {
    const shoppingList = await shoppingListService.getShoppingListById(req.requestedObject.userId, req.params.id);
    if (!shoppingList) {
      return res.status(404).send('Shopping list not found');
    }
    res.send(shoppingList);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function updateShoppingList(req, res) {
  try {
    const updatedShoppingList = await shoppingListService.updateShoppingList(req.requestedObject.userId, req.params.id, req.body);
    if (!updatedShoppingList) {
      return res.status(404).send('Shopping list not found');
    }
    res.send(updatedShoppingList);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteShoppingList(req, res) {
  try {
    const deletedShoppingList = await shoppingListService.deleteShoppingList(req.requestedObject.userId, req.params.id);
    if (!deletedShoppingList) {
      return res.status(404).send('Shopping list not found');
    }
    res.send(deletedShoppingList);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  createShoppingList,
  getAllShoppingLists,
  getShoppingListById,
  updateShoppingList,
  deleteShoppingList,
};

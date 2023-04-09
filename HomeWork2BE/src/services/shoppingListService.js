
const ShoppingList = require('../db/models/ShoppingList');

async function createShoppingList(userId, shoppingListData) {
  try {
    const shoppingList = new ShoppingList({
      ...shoppingListData,
      owner: userId,
    });
    await shoppingList.validate();
    await shoppingList.save();
    return shoppingList;
  } catch (error) {
    throw new Error(`Could not create shopping list: ${error.message}`);
  }
}

async function getAllShoppingLists(userId) {
  try {
    const shoppingLists = await ShoppingList.find({ owner: userId });
    return shoppingLists;
  } catch (error) {
    throw new Error(`Could not get shopping lists: ${error.message}`);
  }
}

async function getShoppingListById(shoppingListId) {
  try {
    const shoppingList = await ShoppingList.findById(shoppingListId);
    if (!shoppingList) {
      throw new Error('Shopping list not found');
    }
    return shoppingList;
  } catch (error) {
    throw new Error(`Could not get shopping list: ${error.message}`);
  }
}

async function updateShoppingList(shoppingListId, updatedShoppingListData) {
  try {
    const shoppingList = await ShoppingList.findByIdAndUpdate(shoppingListId, updatedShoppingListData, { new: true });
    if (!shoppingList) {
      throw new Error('Shopping list not found');
    }
    return shoppingList;
  } catch (error) {
    throw new Error(`Could not update shopping list: ${error.message}`);
  }
}

async function deleteShoppingList(shoppingListId) {
  try {
    const deletedShoppingList = await ShoppingList.findByIdAndDelete(shoppingListId);
    if (!deletedShoppingList) {
      throw new Error('Shopping list not found');
    }
    return deletedShoppingList;
  } catch (error) {
    throw new Error(`Could not delete shopping list: ${error.message}`);
  }
}

module.exports = {
  createShoppingList,
  getAllShoppingLists,
  getShoppingListById,
  updateShoppingList,
  deleteShoppingList,
};

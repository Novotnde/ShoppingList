const ShoppingList = require('../db/models/ShoppingList');

async function createItem(shoppingListId, item) {
  const shoppingList = await ShoppingList.findById(shoppingListId);
  if (!shoppingList) {
    throw new Error('Shopping list not found');
  }

  shoppingList.items.push(item);
  await shoppingList.save();
  return shoppingList;
}

async function getAllItems(shoppingListId) {
  const shoppingList = await ShoppingList.findById(shoppingListId);
  if (!shoppingList) {
    throw new Error('Shopping list not found');
  }

  return shoppingList.items;
}

async function markItemAsPurchased(shoppingListId, itemId) {
  const shoppingList = await ShoppingList.findById(shoppingListId);
  if (!shoppingList) {
    throw new Error('Shopping list not found');
  }

  const item = shoppingList.items.id(itemId);
  if (!item) {
    throw new Error('Item not found');
  }

  item.isBought = true;
  await shoppingList.save();
  return shoppingList;
}

async function deleteItem(shoppingListId, itemId) {
  const shoppingList = await ShoppingList.findById(shoppingListId);
  if (!shoppingList) {
    throw new Error('Shopping list not found');
  }

  const item = shoppingList.items.id(itemId);
  if (!item) {
    throw new Error('Item not found');
  }

  item.remove();
  await shoppingList.save();
  return item;
}

module.exports = {
  createItem,
  getAllItems,
  markItemAsPurchased,
  deleteItem,
};

const express = require('express');
const router = express.Router();
const addUserToReqObject = require('../middleware/userMiddleWare');
const ShoppingListController = require('../controllers/shoppingListController');
const ItemController = require('../controllers/itemController');
const InvitationController = require('../controllers/invitationController');

// Create a new Shopping List
router.post('/shopping-lists',addUserToReqObject, ShoppingListController.createShoppingList);
// Get all Shopping Lists for a User
router.get('/shopping-lists', addUserToReqObject, ShoppingListController.getAllShoppingLists);

// Get a specific Shopping List by ID
router.get('/shopping-lists/:id', addUserToReqObject,ShoppingListController.getShoppingListById);

// Update a Shopping List
router.put('/shopping-lists/:id', addUserToReqObject, ShoppingListController.updateShoppingList);

// Delete a Shopping List
router.delete('/shopping-lists/:id',addUserToReqObject, ShoppingListController.deleteShoppingList);

// Add a new Item to a Shopping List
router.post('/shopping-lists/:id/items', ItemController.createItem);

// Get all Items in a Shopping List
router.get('/shopping-lists/:id/items', ItemController.getAllItems);

// Mark an Item as purchased in a Shopping List
router.put('/shopping-lists/:id/items/:item_id', ItemController.markItemAsPurchased);

// Delete an Item from a Shopping List
router.delete('/shopping-lists/:id/items/:item_id', ItemController.deleteItem);

// Invite a new Member to a Shopping List
router.post('/shopping-lists/:id/invitations', addUserToReqObject, InvitationController.inviteUser);

// Get all Invitations for a User
router.get('/invitations',addUserToReqObject, InvitationController.getAllInvitations);

// Accept an Invitation to join a Shopping List
router.put('/invitations/:id/accept',addUserToReqObject, InvitationController.acceptInvitation);

// Decline an Invitation to join a Shopping List
router.put('/invitations/:id/decline',addUserToReqObject, InvitationController.declineInvitation);

module.exports = router;

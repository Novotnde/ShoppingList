const mongoose = require('mongoose');

const invitationSchema = new mongoose.Schema({
  shoppingList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShoppingList',
    required: true
  },
  inviter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  inviteeEmail: {
    type: String,
    required: true,
    trim: true
  },
  accepted: {
    type: Boolean,
    default: false
  },
  declined: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Invitation', invitationSchema);

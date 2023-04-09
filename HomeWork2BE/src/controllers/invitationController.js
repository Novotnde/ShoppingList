const invitationService = require('../services/InvitationService');

async function inviteUser(req, res) {
  try {
    const data = {
      shoppingList: req.params.id,
      inviter: req.user.id,
      invitee: req.body.invitee,
    };
    const invitation = await invitationService.createInvitation(data);
    res.status(201).send(invitation);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getAllInvitations(req, res) {
  try {
    const invitations = await invitationService.getInvitationsByUserId(req.user.id);
    res.send(invitations);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function acceptInvitation(req, res) {
  try {
    const invitation = await invitationService.acceptInvitation(req.params.id, req.user.id);
    res.send(invitation);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function declineInvitation(req, res) {
  try {
    const invitation = await invitationService.declineInvitation(req.params.id);
    res.send(invitation);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  inviteUser,
  getAllInvitations,
  acceptInvitation,
  declineInvitation,
};

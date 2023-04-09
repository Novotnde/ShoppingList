const Invitation = require('../db/models/Invitation');

async function createInvitation(data) {
  try {
    const invitation = new Invitation(data);
    await invitation.validate();
    await invitation.save();
    return invitation;
  } catch (error) {
    throw new Error(`Could not create invitation: ${error.message}`);
  }
}

async function getInvitationsByUserId(userId) {
  try {
    const invitations = await Invitation.find({ invitee: userId });
    return invitations;
  } catch (error) {
    throw new Error(`Could not get invitations: ${error.message}`);
  }
}

async function acceptInvitation(invitationId, userId) {
  try {
    const invitation = await Invitation.findById(invitationId);
    if (!invitation) {
      throw new Error('Invitation not found');
    }
    invitation.status = 'accepted';
    invitation.invitee = userId;
    await invitation.save();
    return invitation;
  } catch (error) {
    throw new Error(`Could not accept invitation: ${error.message}`);
  }
}

async function declineInvitation(invitationId) {
  try {
    const invitation = await Invitation.findById(invitationId);
    if (!invitation) {
      throw new Error('Invitation not found');
    }
    invitation.status = 'declined';
    await invitation.save();
    return invitation;
  } catch (error) {
    throw new Error(`Could not decline invitation: ${error.message}`);
  }
}

module.exports = {
  createInvitation,
  getInvitationsByUserId,
  acceptInvitation,
  declineInvitation,
};
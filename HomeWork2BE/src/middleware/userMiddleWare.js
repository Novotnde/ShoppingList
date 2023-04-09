const jwt = require('jsonwebtoken');

async function addUserToReqObject(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!req.requestedObject) {
      req.requestedObject = {}; // create requestedObject if it doesn't exist
    }
    req.requestedObject.userId = decoded.userId;
    next();
  } catch (error) {
    res.send({error});
  }
}


module.exports = addUserToReqObject;

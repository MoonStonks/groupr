const { db } = require("../config/firestore");

const getEventGroupCapacity = async (eventId) => {
  return 4;
};

module.exports = {
  getEventGroupCapacity,
};

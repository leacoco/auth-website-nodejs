const mongoose = require("mongoose");

const realmSchema = mongoose.Schema({
  realmName: {
    type: String,
    required: true,
  },
  adminGroup: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("RealmSchema", realmSchema);

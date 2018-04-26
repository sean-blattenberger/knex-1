const database = require("./database-connection");

module.exports = {
  list() {
    return database("resolutions");
  },
  read(id) {
    return database("resolutions").where("id", id);
  },
  create(resolution) {
    return database("resolutions").insert(resolution);
  },
  update(id, resolution) {
    return database("resolutions").where("id", id).update(resolution);
  },
  delete(id) {
    return database("resolutions").where("id", id).del();
  }
};

const database = require("./database-connection");

module.exports = {
  list() {
    return database("resolutions");
  },
  read(id) {
    return database("resolutions").select().where("id", id).first();
  },
  create(resolution) {
    return database("resolutions").select().insert(resolution).returning("*");
  },
  update(id, resolution) {
    return database("resolutions").select().where("id", id).update(resolution);
  },
  delete(id) {
    return database("resolutions").select().where("id", id).del();
  }
};

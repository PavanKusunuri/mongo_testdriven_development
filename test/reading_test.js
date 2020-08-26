const assert = require("assert");
const User = require("../src/user");
const { before } = require("mocha");

describe("Reading Users out of database", () => {
  let joe;
  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    joe.save()
      .then(() => done());
  });
  it("finds all users with name of Joe", (done) => {
    User.find({ name: "Joe" })
      .then((users) => {
        assert(users[0].id.toString() === joe._id.toString());
        done();
      });
  });
  it("find a user with a particular id", (done) => {
    User.findOne({ _id: joe._id })
      .then((user) => {
        assert(user.name === "Joe");
        done();
      });
  });
});

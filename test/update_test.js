const assert = require("assert");
const User = require("../src/user");

describe("Updating Records", () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    joe.save().then(() => done());
  });

  it("instance type using set n save", (done) => {
    joe.set("name", "Pavan");
    joe
      .save()
      .then(() => User.find({}))
      .then((users) => {
        assert(user.length === 1);
        assert(users[0].name === "Pavan");
        done();
      });
    console.log("Save");
  });
});

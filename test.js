const assert = require("assert");
const app = require("./app");

describe("App", () => {
  it('should return "Hello, World!" when accessing root URL', (done) => {
    assert.equal(app(), "Hello, World!");
    done();
  });
});

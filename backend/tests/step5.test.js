// Import required dependencies
const { tables } = require("./setup");

describe("JOIN tile ON boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y", () => {
  test("your readAll method in BoatManager.js selects boat.id", async () => {
    const [blackPearl] = await tables.boat.readAll({
      name: "Black Pearl",
    });

    expect(blackPearl).toHaveProperty("id");
  });
  test("your readAll method in BoatManager.js selects boat.coord_x", async () => {
    const [blackPearl] = await tables.boat.readAll({
      name: "Black Pearl",
    });

    expect(blackPearl).toHaveProperty("coord_x");
  });
  test("your readAll method in BoatManager.js selects boat.coord_y", async () => {
    const [blackPearl] = await tables.boat.readAll({
      name: "Black Pearl",
    });

    expect(blackPearl).toHaveProperty("coord_y");
  });
  test("your readAll method in BoatManager.js selects boat.name", async () => {
    const [blackPearl] = await tables.boat.readAll({
      name: "Black Pearl",
    });

    expect(blackPearl).toHaveProperty("name");
  });
  test("your readAll method in BoatManager.js selects tile.type", async () => {
    const [blackPearl] = await tables.boat.readAll({
      name: "Black Pearl",
    });

    expect(blackPearl).toHaveProperty("type");
  });
  test("your readAll method in BoatManager.js selects tile.has_treasure", async () => {
    const [blackPearl] = await tables.boat.readAll({
      name: "Black Pearl",
    });

    expect(blackPearl).toHaveProperty("has_treasure");
  });
});

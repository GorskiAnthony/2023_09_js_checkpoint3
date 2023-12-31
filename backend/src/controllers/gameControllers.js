const tables = require("../tables");

const add = async (req, res, next) => {
  const boats = await tables.boat.readAll({ name: "Black Pearl" });
  const blackPearl = boats[0];
  blackPearl.coord_x = 1;
  blackPearl.coord_y = 1;

  const treasureIsland = await tables.tile.getRandomIsland();

  try {
    const boatResult = await tables.boat.update(blackPearl);

    if (boatResult.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      const tileResult = await tables.tile.hideTreasure(treasureIsland);

      if (tileResult.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
};

const { getTypes } = require("../controllers/typeController");

const getTypeHandler = async (req, res) => {
  try {
    const types = await getTypes();
    return res.send(types);
  } catch (error) {
    //manejo si hay un error
    return res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getTypeHandler
};


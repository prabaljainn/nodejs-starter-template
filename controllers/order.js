exports.addOrder = async (req, res, next) => {
  res.status(200).json({ data: "add-Orders from controller" });
};
exports.getOrder = async (req, res, next) => {
  res.status(200).json({ data: "get-Orders from controller" });
};

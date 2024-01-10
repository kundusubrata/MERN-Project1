// module.exports = (theFunc) => (req,res,next) => {
//     Promise.resolve(theFunc(req,res,next)).catch(next);
// };

module.exports = (theFunc) => async (req, res, next) => {
    try {
      await Promise.resolve(theFunc(req, res, next));
    } catch (error) {
      console.error("Async Error:", error);
      next(error);
    }
  };
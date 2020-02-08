
function appendAttributesToRequest(io) {
  return (req,res,next) => {
    req.io = io;
    next();
  };
}

module.exports = appendAttributesToRequest;

function appendAttributesToRequest(append) {
  return (req,res,next) => {
    console.log("to no meio da request", append);
    next();
  };
}

module.exports = appendAttributesToRequest;
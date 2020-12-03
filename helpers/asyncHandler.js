// const colors = require('colors');

// colors.enable();

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch((result) => {
      if (result && result.error)
        res.status(result.error.httpCode).json({
          success: false,
          error: result.error
        });
      else
        res.status(500).json({
          success: false,
          error: result
        });
    });
};

module.exports = asyncHandler;

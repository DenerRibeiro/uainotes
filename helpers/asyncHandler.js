// const colors = require('colors');

// colors.enable();

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch((result) => {
      if (result)
        res.status(result.error.httpCode).json({
          success: false,
          error: result.error
        });
    });
};

module.exports = asyncHandler;

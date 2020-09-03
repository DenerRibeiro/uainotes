// const colors = require('colors');

// colors.enable();

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    // .then((result) => { if (result) console.log(`Successful Request`.green) })
    .catch(next);
};

module.exports = asyncHandler;

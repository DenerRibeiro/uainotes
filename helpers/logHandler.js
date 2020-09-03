const fs = require('fs');

exports.success = (path, action) => {
  const now = new Date();
  const logAction = action;
  const logDate = ` at ${Date(now)}\n`;
  const log = logAction + logDate;
  fs.appendFile(path, log, (err) => {
    if (err) {
      console.log(`Log failure: ${err} to file ${path}`);
      // throw err;
    }
    // console.log('The "data to append" was appended to file!');
  });
};

exports.failure = (path, action, error) => {
  const now = new Date();
  const logAction = action;
  const logDate = ` at ${Date(now)}\n`;
  const log = `Error on ${logAction} : ${error}${logDate}`;
  fs.appendFile(path, log, (err) => {
    if (err) {
      console.log(`Log failure: ${err} to file ${path}`);
      // throw err;
    }
    // console.log('The "data to append" was appended to file!');
  });
};

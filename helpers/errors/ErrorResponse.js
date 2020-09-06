class ErrorResponse extends Error {
  constructor(error, result) {
    super();
    this.error = error;
    this.result = result;
    // this.responseCode = responseCode
  }
}

module.exports = ErrorResponse;

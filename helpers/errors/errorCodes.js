module.exports = {
  //Not found
  NOT_FOUND: { errorCode: 1000, httpCode: 404, message: 'NOT_FOUND' },
  PROVIDER_NOT_FOUND: { errorCode: 1001, httpCode: 404, message: 'PROVIDER_NOT_FOUND' },
  PRODUCT_NOT_FOUND: { errorCode: 1002, httpCode: 404, message: 'PRODUCT_NOT_FOUND' },
  PAYMENT_NOT_FOUND: { errorCode: 1003, httpCode: 404, message: 'PAYMENT_NOT_FOUND' },

  //Could not create
  COULD_NOT_CREATE: { errorCode: 2000, httpCode: 500, message: 'COULD_NOT_CREATE' },
  COULD_NOT_CREATE_PROVIDER: { errorCode: 2001, httpCode: 500, message: 'COULD_NOT_CREATE_PROVIDER' },
  COULD_NOT_CREATE_PRODUCT: { errorCode: 2002, httpCode: 500, message: 'COULD_NOT_CREATE_PRODUCT' },
  COULD_NOT_CREATE_PAYMENT: { errorCode: 2003, httpCode: 500, message: 'COULD_NOT_CREATE_PAYMENT' },

  //Could not update
  COULD_NOT_UPDATE: { errorCode: 3000, httpCode: 500, message: 'COULD_NOT_UPDATE' },
  COULD_NOT_UPDATE_PROVIDER: { errorCode: 3001, httpCode: 500, message: 'COULD_NOT_UPDATE_PRODUCT' },
  COULD_NOT_UPDATE_PRODUCT: { errorCode: 3002, httpCode: 500, message: 'COULD_NOT_UPDATE_PRODUCT' },
  COULD_NOT_UPDATE_PAYMENT: { errorCode: 3003, httpCode: 500, message: 'COULD_NOT_UPDATE_PAYMENT' },

  //Could not delete
  COULD_NOT_DELETE: { errorCode: 4000, httpCode: 500, message: 'COULD_NOT_DELETE' },
  COULD_NOT_DELETE_PROVIDER: { errorCode: 4001, httpCode: 500, message: 'COULD_NOT_DELETE_PROVIDER' },
  COULD_NOT_DELETE_PRODUCT: { errorCode: 4002, httpCode: 500, message: 'COULD_NOT_DELETE_PRODUCT' },
  COULD_NOT_DELETE_PAYMENT: { errorCode: 4003, httpCode: 500, message: 'COULD_NOT_DELETE_PAYMENT' },

  //Wrong parameters
  WRONG_PARAMETERS: { errorCode: 5000, httpCode: 400, message: 'WRONG_PARAMETERS' },

  //Empty list
  EMPTY_LIST: { errorCode: 6000, httpCode: 500, message: 'EMPTY_LIST' },

  //Already exists
  ALREADY_EXISTS: { errorCode: 7000, httpCode: 500, message: 'ALREADY_EXISTS' },
  PROVIDER_ALREADY_EXISTS: { errorCode: 7001, httpCode: 500, message: 'PROVIDER_ALREADY_EXISTS' },
  PRODUCT_ALREADY_EXISTS: { errorCode: 7002, httpCode: 500, message: 'PRODUCT_ALREADY_EXISTS' },
  USERNAME_ALREADY_EXISTS: { errorCode: 7003, httpCode: 500, message: 'USERNAME_ALREADY_EXISTS' },

  //Failed
  FAILED_TO_AUTHENTICATE: { errorCode: 8000, httpCode: 401, message: 'FAILED_TO_AUTHENTICATE' },
  FAILED_TO_SEND_EMAIL: { errorCode: 8001, httpCode: 500, message: 'FAILED_TO_SEND_EMAIL' },
  FAILED_TO_LOGIN: { errorCode: 8002, httpCode: 401, message: 'FAILED_TO_LOGIN' },
};

const providerDao = require('../../database/dao/providerDao');
const Provider = require('../../models/Provider');
const { nextTick } = require('process');
const models = require('../../models/index');

exports.findAll = async (req, res) => {
  const result = await providerDao.getProviders(models.Provider);
  res.status(200).json({
    success: true,
    data: result,
  });
};

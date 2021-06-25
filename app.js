'use strict';

const axios = require('axios');

const createCos = options => {
  const { axios: http, baseURL, key } = options;
  const amap = http || axios.create({ baseURL });
  // amap.defaults.baseURL = baseURL;
  amap.defaults.headers.get.key = key;
  return amap;
};

module.exports = app => {
  app.addSingleton('amap', createCos);
};

'use strict';

const axios = require('axios');

const createCos = options => {
  const { axios: userAxios, baseURL, key } = options;
  const amap = userAxios || axios;
  amap.defaults.baseURL = baseURL;
  amap.defaults.headers.get.key = key;
  return amap;
};

module.exports = app => {
  app.addSingleton('amap', createCos);
};

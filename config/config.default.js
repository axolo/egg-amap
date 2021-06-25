'use strict';

const axios = require('axios');

/**
 * egg-amap default config
 * @member Config#amap
 * @property {Object} axios - axios your defined
 * @property {String} key - AMap App key
 */
exports.amap = {
  default: {
    axios: axios.create({
      baseURL: 'https://restapi.amap.com',
    }),
    baseURL: 'https://restapi.amap.com',
  },
  // client: {
  //   key: 'AMAP-APP-KEY',
  // },
};

# egg-amap

[AMap WEB Service API] for Egg.js plugin.

## Install

```bash
npm i @axolo/egg-amap --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.amap = {
  enable: true,
  package: '@axolo/egg-amap',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
const axios = require('axios');
exports.amap = {
  // axios: axios.create({ baseURL: 'https://restapi.amap.com' }),
  key: 'AMAP-APP-KEY',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
'use strict';

const Controller = require('egg').Controller;

class AmapController extends Controller {
  async index() {
    const { app, ctx } = this;
    const amap = app.amap; // axios instance
    const { keywords } = ctx.request.query;
    // https://lbs.amap.com/api/webservice/guide/api/newpoisearch
    const result = await amap.get('/v5/place/text', { params: { keywords } });
    ctx.body = result?.data;
  }
}

module.exports = AmapController;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-amap/issues).

## License

[MIT](LICENSE)

[AMap WEB Service API]: https://lbs.amap.com/api/webservice/summary

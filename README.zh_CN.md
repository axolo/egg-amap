# egg-amap

[高德地图WEB服务API] Egg.js 插件。

## 安装插件

```bash
npm i @axolo/egg-amap --save
```

## 开启插件

```js
// config/plugin.js
exports.amap = {
  enable: true,
  package: '@axolo/egg-amap',
};
```

## 详细配置

```js
// {app_root}/config/config.default.js
exports.amap = {
  // axios: require('axios'),
  key: 'AMAP-APP-KEY',
};
```

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。


## 使用举例

```js
'use strict';

const Controller = require('egg').Controller;

class AmapController extends Controller {
  async index() {
    const { app, ctx } = this;
    const amap = app.amap.get('admin'); // axios实例
    const { keywords } = ctx.request.query;
    // https://lbs.amap.com/api/webservice/guide/api/newpoisearch
    const result = await amap.get('/v5/place/text', { params: { keywords } });
    ctx.body = result?.data;
  }
}

module.exports = AmapController;
```

## 提问交流

请到 [egg issues](https://github.com/axolo/egg-amap/issues) 异步交流。

## License

[MIT](LICENSE)

[高德地图WEB服务API]: https://lbs.amap.com/api/webservice/summary
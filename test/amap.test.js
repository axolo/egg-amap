'use strict';

const mock = require('egg-mock');

describe('test/amap.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/amap-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, amap')
      .expect(200);
  });
});

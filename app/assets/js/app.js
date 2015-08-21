var page = require('page');

page('/ex001.html', require('./ex001'));
page('/', require('./index'));

page({
  click: false,
  popstate: false,
  dispatch: true,
  hashbang: false
});


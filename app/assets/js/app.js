import page from 'page';
import indexModule from './index';
import ex001Module from './ex001';
import "../less/app.less";

page('/ex001.html', ex001Module);
page('/', indexModule);

page({
  click: false,
  popstate: false,
  dispatch: true,
  hashbang: false
});


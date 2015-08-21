var utilModule = require('./util');

/**
 *
 */
var selectPageByLang = function() {

  var params = utilModule.getUrlParams(location.search.substring(1)),
      lang, is_lang_ja;

  if ('lang' in params && params.lang !== '') {
    is_lang_ja = utilModule.isLangJa(params.lang);
  } else {
    is_lang_ja = utilModule.isLangJa();
  }

  if (is_lang_ja) {
    $('#page-ja').show();
    $('#page-en').hide();
  } else {
    $('#page-ja').hide();
    $('#page-en').show();
  }
};

/**
 *
 */
var init = function() {

  selectPageByLang();

};

module.exports = {
  init: init
};



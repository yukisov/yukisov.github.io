(function(global) {
  "use strict";

  global.app = global.app || {};

  global.app.lang = (function(global) {

    /**
     *
     */
    var selectPageByLang = function() {

      var params = global.app.utils.getUrlParams(location.search.substring(1)),
          lang, is_lang_ja;

      if ('lang' in params && params.lang !== '') {
        is_lang_ja = global.app.utils.isLangJa(params.lang);
      } else {
        is_lang_ja = global.app.utils.isLangJa();
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

    return {
      init: init
    };

  })(global);


  //------------
  // Main
  //------------
  $(function(){

    global.app.lang.init();

  });

})((typeof window === 'object' && window) || global);

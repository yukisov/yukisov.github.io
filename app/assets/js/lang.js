import * as utilModule from './util';

/**
 *
 */
function selectPageByLang() {

  let params = utilModule.getUrlParams(location.search.substring(1)),
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
}

/**
 *
 */
export default function() {

  selectPageByLang();

}

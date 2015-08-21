var Promise = require('promise');
var API_KEY = 'JGLSPSKTo83V3c0y2Rd0EpJuqnp0seLnQkwNekyC';

/**
 * Get APOD (Astronomy Picture of the Day) data
 *
 * @return {Promise}
 */
var getApodData = function(lat, lon) {

  return new Promise (function(resolve, reject) {

    if (isNaN(lat) || isNaN(lon)) {
      reject(new Error('Params type error'));
      return;
    }

    var url = 'https://api.nasa.gov/planetary/earth/imagery?lat=' + lat + '&lon=' + lon +
              '&cloud_score=True&api_key=' + API_KEY;

    $.ajax({
      url: url
    })
      .done(function(data, textStatus, jqXHR) {
        if (typeof console === 'object') console.info(data);

        // data:
        //   response example: https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=DEMO_KEY
        // textStatus:
        //   'success'

        resolve(data);

      })
      .fail(function(jqXHR, textStatus, errorThrown) {

        reject(new Error('Ajax Error'));

      })
    ;
  });

};

module.exports = {
  getApodData: getApodData
};


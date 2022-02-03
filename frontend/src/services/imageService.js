const axios = require('axios');

export async function getImage(url) {
  console.debug('Start fetching: ', url);
  const startCallTimeStamp = performance.now();
  axios
    .get(url)
    .then(function(response) {
      // handle success
      console.info(response);
    })
    .catch(function(error) {
      // handle error
      console.error(error);
    })
    .then(function() {
      // always executed
      console.debug(
        `Call to load data ' ${url} took  ${
          performance.now() - startCallTimeStamp
        } milliseconds.`
      );
    });
}

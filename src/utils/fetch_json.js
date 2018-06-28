const fetchJson = function(url) {
  console.log(url);
  return new Promise((resolve, reject) => {
    fetch(url, {cache: 'no-store'}).then((resp) => {
      return resp.json();
    }).
      then((json) => {
        resolve(json);
      }).
      catch((err) => {
        reject(err);
      });
  });
};

export default fetchJson;

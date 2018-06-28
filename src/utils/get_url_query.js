const numreg = /^\d+$/;

const getUrlQuery = function() {
  const search = window.location.search.slice(1);
  if (search.length === 0) {
    return {};
  }

  const queryList = search.split('&');
  const query = {};

  for (let i = 0; i < queryList.length; i += 1) {
    const pair = queryList[i].split('=');

    if (numreg.test(pair[1])) {
      pair[1] = Number(pair[1]);
    }

    query[pair[0]] = pair[1];
  }

  return query;
};

export default getUrlQuery;

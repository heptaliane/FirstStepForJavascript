import fetchJson from './fetch_json.js';
import getUrlQuery from './get_url_query.js';
import {route_json_url as jsonPath} from '../constant.json';

const queryHandler = function() {
  const query = getUrlQuery();
  const qlength = Object.keys(query).length;

  return fetchJson(jsonPath).then((json) => {
    let idxs = [];
    json.forEach((target, idx) => {
      if (qlength === Object.keys(target.query).length) {
        idxs.push(idx);
      }
    });

    Object.keys(query).forEach((key) => {
      idxs = idxs.filter((idx) => {
        return query[key] === json[idx].query[key];
      });
    });

    if (idxs.length === 0) {
      // Not found
      throw new Error('404 not found');
    }

    return {
      idx: idxs[0],
      jsonList: json,
    };

  }).
    then(({idx, jsonList}) => {
      return fetchJson(jsonList[idx].path).then((data) => {
        const prevData = idx > 0 ?
          jsonList[idx - 1] :
          {};
        const nextData = idx <= jsonList.length ?
          jsonList[idx + 1] :
          {};

        Object.assign(data, {
          prev: prevData.body === undefined ?
            {} :
            prevData.query,
          next: nextData.body === undefined ?
            {} :
            nextData.query,
        });

        return data;
      });
    });
};

export default queryHandler;

import fetchJson from './fetch_json.js';
import getUrlQuery from './get_url_query.js';
import {route_json_html as jsonPath} from '../constant.json';

export default function() {
  const query = getUrlQuery();
  const qlength = Object.keys(query).lenght;

  fetchJson(jsonPath).then((json) => {
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
      return null;
    }

    const idx = idxs[0];
    return fetchJson(json[idx].path).then((data) => {
      const prevData = idx > 0 ?
        json[idx - 1] :
        {};
      const nextData = idx <= json.length ?
        json[idx + 1] :
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
}

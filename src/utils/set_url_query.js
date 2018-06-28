export default function(query) {
  const search = [];
  const keys = Object.keys(query);

  for (let i = 0; i < keys.length; i += 1) {
    if (typeof query[keys[i]] === 'string' ||
      typeof query[keys[i]] === 'number') {
      search.push(`${keys[i]}=${query[keys[i]]}`);
    }
  }

  location.search = `?${search.join('&')}`;
}

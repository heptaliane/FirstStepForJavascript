export default function() {
  const search = window.location.search.slice(1).split('&');
  const query = {};

  for (let i = 0; i < search.length; i += 1) {
    const pair = search[i].split('=');
    query[pair[0]] = pair[1];
  }

  return query;
}

export default function(url) {
  return fetch(url, {cache: 'no-store'}).then((resp) => {
    return resp.json();
  });
}

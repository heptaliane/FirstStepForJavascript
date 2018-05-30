export default function(string) {
  const temp = document.createElement('div');
  temp.appendChild(document.createElement('pre')).textContent = string;

  document.body.appendChild(temp);
  document.getSelection().selectAllChildren(temp);

  const result = document.execCommand('copy');
  document.body.removeChild(temp);

  return result;
}

export default function render(source, position, markup, clear = false) {
  if (clear) {
    // eslint-disable-next-line
    document.body.innerHTML = '';
  }

  source.insertAdjacentHTML(position, markup);
}

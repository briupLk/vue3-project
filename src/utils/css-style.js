export const updateCss = function(content, id) {
  const style = document.createElement('style')
  style.id = id
  style.innerHTML = content
  document.head.appendChild(style)
}

export const removeCss = function(id) {
  const style = document.getElementById(id)
  if (style) {
    document.head.removeChild(style);
  }
}

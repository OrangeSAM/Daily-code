// ./src/heading.js
export default () => {
    const element = document.createElement('h2')
    element.textContent = 'Hello webpa2ck'
    element.addEventListener('click', () => alert('Hello webpack'))
    return element
  }
  
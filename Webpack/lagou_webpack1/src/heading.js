/**
 * Author：
 * Date: 21.6.1
 * Description:
 */
// ./src/heading.js

export default () => {

  const element = document.createElement('h2')

  element.textContent = 'Hello header'

  element.addEventListener('click', () => alert('Hello webpack'))

  return element

}

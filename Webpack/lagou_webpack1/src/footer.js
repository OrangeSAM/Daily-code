/**
 * Author：
 * Date: 21.6.1
 * Description:
 */
// ./src/heading.js

export default () => {

  const element = document.createElement('h3')

  element.textContent = 'this is footer.js '

  element.addEventListener('click', () => alert('Hello footer.js'))

  return element

}

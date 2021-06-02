/**
 * Author：
 * Date: 21.6.1
 * Description:
 */

// ./src/index.js

import createHeading from './heading.js'
import createFooter from './footer'

const heading = createHeading()
const footer = createFooter()

document.body.append(heading)
document.body.append(footer)

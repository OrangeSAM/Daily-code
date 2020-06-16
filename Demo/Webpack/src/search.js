document.write('search js')

import React from 'react'
import ReactDom from 'react-dom'
import './search.less'
import logo from './images/2.png'

class Search extends React.Component {
    render() {
        return <div className="search-text">search sssam<img src={logo} /></div>
    }
}
ReactDom.render(
    <Search />,
    document.getElementById('root')
)
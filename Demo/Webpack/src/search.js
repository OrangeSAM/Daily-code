document.write('search js')

import React from 'react'
import ReactDom from 'react-dom'
import './search.less'

class Search extends React.Component {
    render() {
        return <div className="search-text">search dwadawdawdadwad</div>
    }
}
ReactDom.render(
    <Search />,
    document.getElementById('root')
)
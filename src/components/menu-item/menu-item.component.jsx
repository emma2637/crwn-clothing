import React from 'react'
import{withRouter} from 'react-router-dom' //takes any component and modifies it and return a modify component

import './menu-item.styles.scss'
//functional component
const MenuItem =({title, imageUrl, size, history, linkUrl,match}) =>(
//javasscript template string ``
//this is equivalent to /somematchedURL/linkURL
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}> 
        <div className='background-image' style={{
        backgroundImage:`url(${imageUrl})`}}/>
        
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP</span>
         </div>
    </div>
)

export default withRouter(MenuItem); //returns back super power menu item component with access to history props

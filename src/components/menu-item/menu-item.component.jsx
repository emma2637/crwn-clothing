import React from 'react'
import './menu-item.styles.scss'
//functional component
const MenuItem =({title, imageUrl, id, size}) =>(
//javasscript template string ``
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
        backgroundImage:`url(${imageUrl})`}}/>
        
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP</span>
         </div>
    </div>
)

export default MenuItem;

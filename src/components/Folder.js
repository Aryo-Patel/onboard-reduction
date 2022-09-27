import React, {Fragment, useState} from 'react'

import File from './File'

const Folder = (props) => {
    const [expanded, toggleExpand] = useState(true);
    let i = 0;
    return (
        <div className = "folder-wrapper">
            <div className = "folder-name" onClick={(e) => toggleExpand(!expanded)}>{props.name}</div>
            <div className = "folders">
                {expanded ? props.files.map(name => <File key = {i++} name = {name}></File>) : <div></div>}
            </div>
        </div>
    )
}

export default Folder;
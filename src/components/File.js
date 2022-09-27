import React, {Fragment} from 'react';

const File = (props) => {
    return (
        <Fragment>
            <div className = "file-wrapper" id = {props.name}>{props.name}</div>
        </Fragment>
    )
}

export default File;
import React, {Fragment} from 'react';
import Arrow, { DIRECTION, HEAD } from "react-arrows";
const File = (props) => {
    return (
        <Fragment>
            <div className = "file-wrapper" id = {props.name}>{props.name}</div>
            <Arrow
            className = "arrow"
            from={{
            direction: DIRECTION.RIGHT,
            node: () => document.getElementById('database')
            }}
            to={{
            direction: DIRECTION.LEFT,
            node: () => document.getElementById('routes')
            }}
        />
      </Fragment>
    )
}

export default File;
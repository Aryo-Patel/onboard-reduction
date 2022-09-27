import React, { Fragment } from 'react';
import Arrow, { DIRECTION, HEAD } from 'react-arrows'

import {connect} from 'react-redux';
const AllArrow = ({arrows}) => {
    let i = 0;
    return (
        <Fragment>
            {Object.keys(arrows).map(key => {
                if (arrows[key]) {
                    let key_items = key.split("-")
                    return (
                        <Arrow
                        key = {i++}
                        className="arrow"
                        from={{
                            direction: DIRECTION.BOTTOM,
                            node: () => document.getElementById(key_items[0]),
                            translation: [-0.5, 0.5]
                        }}
                        to={{
                            direction: DIRECTION.TOP,
                            node: () => document.getElementById(key_items[1]),
                            translation: [0, -0.8]
                        }}
                        head={HEAD.VEE}
                        /> 
                    )
                }
            })}
        {/* <Arrow
        className="arrow"
        from={{
            direction: DIRECTION.BOTTOM,
            node: () => document.getElementById("database"),
            translation: [-0.5, 0.5]
        }}
        to={{
            direction: DIRECTION.TOP,
            node: () => document.getElementById("frontend"),
            translation: [0, -0.8]
        }}
        head={HEAD.VEE}
        /> */}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    arrows: state.arrows
})

export default connect(mapStateToProps, {})(AllArrow);
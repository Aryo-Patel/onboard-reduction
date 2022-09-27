import React, {Fragment, useState} from 'react'

import File from './File'

import {connect} from 'react-redux';
import { changeArrowState } from '../actions/changeArrow';
import { changeFolderState } from '../actions/changeFolderState';

const Folder = (props) => {
    const [expanded, toggleExpand] = useState(true);
    let i = 0;

    function adjustExpansion(){
        toggleExpand(!expanded)
        props.changeFolderState(props.name)
        
        let folderState = props.folders

        let arrowMapping;
        if (folderState['server'] && folderState['client']){
            arrowMapping = {
                "database-frontend" : true,
                "routes-frontend": true,
                "server-client": false,
                "components-frontend": true,
                "database-client": false,
                "routes-client":false
            }
        }
        if (folderState['server'] && !folderState['client']){
            arrowMapping = {
                "database-frontend" : false,
                "routes-frontend": false,
                "server-client": false,
                "components-frontend": false,
                "database-client": false,
                "routes-client":false,
                "database-client": true,
                "routes-client" : true
            }
        }
        if (!folderState['server'] && folderState['client']){
            arrowMapping = {
                "server-frontend" : true,
                "server-components": true,
                "components-frontend":true
            }
        }
        if (!folderState['server'] && !folderState['client']){
            arrowMapping = {
                "server-client" : true
            }
        }

        props.changeArrowState(arrowMapping);

    }
    return (
        <div className = "folder-wrapper">
            <div id = {props.name} className = "folder-name" onClick={(e) => adjustExpansion()}>{props.name}</div>
            <div className = "folders">
                {expanded ? props.files.map(name => <File key = {i++} name = {name}></File>) : <div></div>}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    folders: state.folders
})

export default connect(mapStateToProps, {changeArrowState, changeFolderState})(Folder);
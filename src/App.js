import {Fragment} from 'react';
import Folder from './components/Folder';
import Arrow, { DIRECTION } from 'react-arrows'
import './App.css';


function App() {
  return (
    <Fragment>
      <div className="App">
        <h1>Decipher your codebase, see how everything ties together</h1>
        <div>See how it works on a simple example:</div>
          <div id = "folder-container">
            <Folder name = "folder1" files = {["database", "routes"]}/>
            <Folder name = "folder2" files = {["frontend", "components"]}/>
          </div>
      </div>
      
    </Fragment>
  );
}

export default App;

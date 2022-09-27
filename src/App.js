import {Fragment} from 'react';
import Folder from './components/Folder';
import AllArrow from './components/AllArrow'
import {Provider} from 'react-redux';
import './App.css';

import store from './store';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <h1>Decipher your codebase, see how everything ties together</h1>
        <div>See how it works on a simple example:</div>
          <div id = "folder-container">
            <Folder name = "server" id = "server" files = {["database", "routes"]}/>
            <Folder name = "client" id = "client" files = {["frontend", "components"]}/>
          </div>
      </div>
      

      <AllArrow />
    </Provider>
  );
}

export default App;

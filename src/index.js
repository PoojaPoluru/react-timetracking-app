import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const App=()=>{
    return(
        <div>Hello!</div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

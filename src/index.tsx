import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
// import App from './App';

// import { BrowserRouter as Router, Route} from "react-router-dom";
// import Mainpage from './Mainpage';
// import Bar as './content/Bar';

// import LoginMainpage from './view/pages/LoginMainpage';

import Chat from './chatServer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <Chat />
    
    {/* <App /> */}
    {/* <Router> */}
      {/* <Switch> */}
        {/* <Route exact path='/' component={Mainpage}/> */}
      {/* </Switch> */}
    {/* </Router> */}
  </React.StrictMode>
);

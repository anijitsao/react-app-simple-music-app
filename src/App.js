import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

// components 
import Title from './components/Title';
import MusicPanel from './components/MusicPanel';

// css
import './css/style.css'

const App = () => {
  return (
	    <div className="container">
	    	{ /* including the Title and other components */ }
	  		<Title />
	  		<MusicPanel />
	  	</div>
  );
};



export default App;
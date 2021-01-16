import React from 'react';
import "App.css";
import { Sidebar } from './components';
import { Personlist } from './pages';
	
const App = () => {
  return (
    <div className="app">
			<Sidebar />
			<div className="pages">
				<Personlist />
			</div>
    </div>
  );
};

export default App;
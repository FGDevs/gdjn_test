import React, { useEffect } from 'react';
import "App.css";
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from './components';
import { Personlist } from './pages';
	
const App = () => {
	const dispatch = useDispatch();
	const User = useSelector( state => state.Data.user);

	useEffect(() => {
		if(!User.length){
			let saveddata=JSON.parse(localStorage.getItem('data'));
			if(!saveddata){
				Axios.get("https://randomuser.me/api/?results=28")
				.then(result => {
					try {
						localStorage.setItem('data',JSON.stringify(result.data.results));
						dispatch({type:"LOADING"});
						dispatch({
							type:"SET",
							user:result.data.results
						});
					} catch(error) {
						console.error(error, "dispatch")
					}
				}).catch(error => {
					console.error(error, "catched axios");
				});
			}
			try {
				dispatch({type:"LOADING"});
				dispatch({
					type:"SET",
					payload:{user:saveddata}
				});
			} catch(error) {
				console.error(error, "dispatch")
			}  
		};
	},[User]);

  return (
    <div className="app">
			<Sidebar />
			<div className="pages">
				<Personlist User={User} />
			</div>
    </div>
  );
};

export default App;
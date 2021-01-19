import React, { useEffect } from 'react';
import "App.css";
import Axios from 'axios';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Sidebar } from './components';
import { Personlist } from './pages';
	
const App = () => {
	const dispatch = useDispatch();
	const { isLoading, user } = useSelector( state => state.Data, shallowEqual );
	
	useEffect(() => {
		let saveddata = JSON.parse(localStorage.getItem('data'));
		if(user.length===0){
			if(!saveddata){
				Axios.get("https://randomuser.me/api/?results=28")
				.then(result => {
					try {
						dispatch({type:"LOADING"});
						localStorage.setItem( 'data', JSON.stringify(result.data.results) );
						dispatch({
							type: "SET",
							user: result.data.results
						});
					} catch(error) {
						console.error("on dispatch axios:",error );
					}
				}).catch(error => {
					console.error("on 'app' axios  :", error);
				});
			}else {
				try {
					dispatch({type:"LOADING"});
					dispatch({
						type :"SET",
						payload :{user:saveddata}
					});
				} catch(error) {
					console.error("on dispatch localstorage :", error);
				};
			}
		}
	}),[isLoading];

  return (
    <div className="app">
			<Sidebar />
			<div className="pages">
				<Personlist User={user} />
			</div>
    </div>
  );
};

export default App;
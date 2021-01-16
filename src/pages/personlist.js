import React, {useEffect, useState} from "react";
import "./css/personlist.css";
import { useDispatch, useSelector } from 'react-redux';
import { PagingButton, Inputbox, Card, Paging } from "../components";
import { FaPlus, FaSearch } from "react-icons/fa";

const Personlist = () => {
	const dispatch = useDispatch();
	const [Search,setSearch] = useState("");
	const User = useSelector( state => state.Data.user);

	useEffect(() => {
		let saveddata=JSON.parse(localStorage.getItem('data'));
		if(!saveddata){
			Axios.get("https://randomuser.me/api/?results=28")
			.then(result => {
				try {
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
		};
		try {
			dispatch({type:"LOADING"});
			dispatch({
				type:"SET",
				payload:{user:saveddata}
			});
		} catch(error) {
			console.error(error, "dispatch")
		}
	},[]);

  return (
		<>
      <header className="head">
        <div className="userBx">
          <div className="user-text">
            Hallo, <span>Gadjian User</span>
          </div>
          <div className="user-photo">
						Photo
          </div>
        </div>
      </header>
			<div className="personlistcontent">
				<div className="subhead">
					<div className="subhead-text">
						<h1>PERSONNEL LIST</h1>
						<p>List of all personnels</p>
					</div>
					<div className="subhead-utils">
						<Inputbox
							leftIcon={<FaSearch />}
							value={Search}
							placeholder="Find Personels"
							handleOnChange={e=>setSearch(e.target.value)}
						/>
						<PagingButton
							textColor="white"
							label={"ADD PERSONNEL "}
							rightIcon={<FaPlus />}
						/>
					</div>
				</div>
				<div className="listBx">
						<div className="list-card">
							<Card data={Search?User.filter(User=>User.name.first.toLowerCase().includes(Search)):User}/>
						</div>
						<div className="list-paging">
							<Paging data={Search?User.filter(User=>User.name.first.toLowerCase().includes(Search)):User}/>
						</div>
				</div>
			</div>
		</>
  );
};

export default Personlist;

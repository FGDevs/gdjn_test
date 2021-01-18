import React, { useEffect, useState } from "react";

import "./css/personlist.css";
import { useSelector } from 'react-redux';
import { Button, Inputbox, Card, Paging } from "../components";
import { FaPlus, FaSearch } from "react-icons/fa";

const Personlist = ({User}) => {
	const [Search,setSearch] = useState("");
	// const User = useSelector( state => state.Data.user);

	console.log(User)
	// useEffect(() => {
	// 	console.log('a')
	// }, [User])

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
							placeholder="Find Personnels"
							handleOnChange={e=>setSearch(e.target.value)}
						/>
						<Button
							textColor="white"
							label={"ADD PERSONNEL "}
							rightIcon={<FaPlus />}
						/>
					</div>
				</div>
				<div className="listBx">
						<div className="list-card">
							{ User ?
								<Card data={Search?User.filter(User=>User.name.first.toLowerCase().includes(Search)):User}/>
								: null
							}
						</div>
						<div className="list-paging">
							{ User ?
								<Paging data={Search?User.filter(User=>User.name.first.toLowerCase().includes(Search)):User}/>
								: null
							}
						</div>
				</div>
			</div>
		</>
  );
};

export default Personlist;

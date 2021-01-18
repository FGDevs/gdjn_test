import React from 'react';
import '../css/card.css';
import { useSelector, shallowEqual } from 'react-redux';
import { dobFormatter } from '../../helpers';
import { BsThreeDots } from 'react-icons/bs';

const Card = ({ data }) => {
	const { userperpage, currentpage, user } = useSelector( state => state.Data, shallowEqual );

	let begin = ((currentpage - 1) * userperpage);
	let	end = begin + userperpage;

	console.log(window.matchMedia("(max-width: 1066px)"))
	if(!window.matchMedia("(max-width: 1066px)")){
		return data.slice(begin,end).map((val,index) =>{{
				return ( 
					<div className= "cardbox" key= {index}>
						<div className= "cardbox-head">
							<div className= "head-id">
								Personnel ID: 
								<span> gdjian.p.{begin+index+1} </span>
							</div>
							<div className= "head-option">
								<BsThreeDots />
							</div>
						</div>
						<div className="cardbox-user">
							<div className= "cardbox-personnelpic">
								<div className= "personnelpicBx">
									<img src={val.picture.large} alt="personnel picture"/>
								</div>
							</div>
							<div className= "cardbox-details">
								<div className= "details-main">
									<h5>Name</h5>
									<p>{val.name.first} {val.name.last}</p>
									<h5>Phone Number</h5>
									<p>{val.phone}</p>
								</div>
								<div className= "details-secondary">
									<h5>Birthday</h5>
									<p>{dobFormatter(val.dob.date)}</p>
									<h5>Email</h5>
									<p>{val.email}</p>
								</div>
								</div>
							</div>
					</div>
				);
			}
		});
	}else {
		return user.map((val,index) =>{{
			return ( 
				<div className= "cardbox" key= {index}>
					<div className= "cardbox-head">
						<div className= "head-id">
							Personnel ID: 
							<span> gdjian.p.{begin+index+1} </span>
						</div>
						<div className= "head-option">
							<BsThreeDots />
						</div>
					</div>
					<div className="cardbox-user">
						<div className= "cardbox-personnelpic">
							<div className= "personnelpicBx">
								<img src={val.picture.large} alt="personnel picture"/>
							</div>
						</div>
						<div className= "cardbox-details">
							<div className= "details-main">
								<h5>Name</h5>
								<p>{val.name.first} {val.name.last}</p>
								<h5>Phone Number</h5>
								<p>{val.phone}</p>
							</div>
							<div className= "details-secondary">
								<h5>Birthday</h5>
								<p>{dobFormatter(val.dob.date)}</p>
								<h5>Email</h5>
								<p>{val.email}</p>
							</div>
							</div>
						</div>
				</div>
			);
		}
	});
	}

};


export default Card;
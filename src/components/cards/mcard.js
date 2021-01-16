import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

const MCard = ({ data }) => {
	return data.map((val,index) =>{{
			return ( 
				<div className= "mcard" 
						 key			= {index} 
				>
					<div className="mcardhead">
						<div className="mcardhead-text">
							Personnel ID: 
							<span> gdjian.p.{begin+index+1} </span>
						</div>
						<div className="mcardhead-button">
							<BsThreeDots />
						</div>
					</div>
					<div className="mcardpicture">
						<div className="mcardpicture-pictureBx">
							<img style={style.img} src={val.picture.large} alt="personnel picture"/>
						</div>
					</div>
					<div className="mcarddetails">
						<h5>Name</h5>
						<p style={style.text}>{val.name.first} {val.name.last}</p>
						<h5>Phone Number</h5>
					</div>
				</div>
			);
		}
	});
};

export default MCard;

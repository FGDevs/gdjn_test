import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { dobFormatter } from '../../helpers';
import { BsThreeDots } from 'react-icons/bs';

const Card = ({ data }) => {
	const { userperpage, currentpage } = useSelector( state => state.Data, shallowEqual );
	
	let begin = ((currentpage - 1) * userperpage);
	let	end = begin + userperpage;

	return data.slice(begin,end).map((val,index) =>{{
			return ( 
				<div 
					key		= {index}
					style	= {{...style.cardContainer,...style.flexcolumncenter,justifyContent:"unset",alignItems:"unset"}}
				>
					<div style={style.cardHead} >
						<div style={{fontSize:12}}>
							Personnel ID: 
							<span style={{color:"#1cc1bf"}}> gdjian.p.{begin+index+1} </span>
						</div>
						<div style={{fontSize:20}} >
							<BsThreeDots />
						</div>
					</div>
					<div style={{...style.cardPictureBx,...style.flexcolumncenter}}>
						<div style={style.cardPicture}>
							<img style={style.img} src={val.picture.large} alt="personnel picture"/>
						</div>
					</div>
					<div style={style.cardDetail}>
						<h5>Name</h5>
						<p style={style.text}>{val.name.first} {val.name.last}</p>
						<h5>Phone Number</h5>
						<p style={style.text}>{val.phone}</p>
						<h5>Birthday</h5>
						<p style={style.text}>{dobFormatter(val.dob.date)}</p>
						<h5>Email</h5>
						<p style={style.text}>{val.email}</p>
					</div>
				</div>
			);
		}
	});
	// return <div>aasasd</div>
};

const style = {
	flexcolumncenter:{
		display:"flex",
		flexDirection:"column",
		justifyContent:"center",
		alignItems:"center"
	},
	cardContainer:{
		background:"white",
		height:460,
		width: 250,
		overflow:"hidden",
		// margin:"0 10px"
	},
	cardHead:{
		borderBottom:"1px solid lightgray",
		padding:10,
		display:"flex",
		width:"auto",
		justifyContent:"space-between",
	},
	cardPictureBx: {
		padding:10
	},
	cardPicture: {
		borderBottom:"2px solid lightgray",
		height:180,
		width:180,
		borderRadius:"100%",
		overflow:"hidden",
	},
	img: {
		height:"100%",
		width:"100%",
		objectFit:"cover"
	},
	cardDetail: {
		padding:"10px 20px"
	},
	text:{
		fontSize:14,
		marginBottom:7
	}
};

export default Card;
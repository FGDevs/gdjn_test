import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { PagingButton } from './';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Paging = ({data}) => {
	const dispatch = useDispatch();
	const { userperpage, currentpage } = useSelector( state => state.Data, shallowEqual );
	
	useEffect(() => {
		/* Set 'currentpage' === 1 if 'data.length' changed
		to prevent user from staying on inaccesible 
		'currentpage' which caused by filtered data 
		that changes the 'data.length' and affects in 
		changing on the max. number of accessible paging 

		eg: 
		User searchs name when on 'currentpage'===7, 
		if search() result in changing 'data.length' 
		from 28 to 20, 'currentpage'===7 shouldn't be
		accessible because max. number of accessible 
		paging is 20/4 === 5
		*/
		dispatch({type:"SET",payload:{currentpage:1}});
	},[data.length])

	return (
	<>
		<PagingButton 
			label				= "Previous Page"
			leftIcon		= {<MdKeyboardArrowLeft/>}
			handleClick = {() => dispatch({type:"SET", payload:{currentpage:currentpage-1} })} 
			disabled		= {currentpage === 1? true:false}
		/>
		<PagingButton 
			label				= "Next Page" 
			rightIcon		= {<MdKeyboardArrowRight/>}
			handleClick = {() => dispatch({type:"SET", payload:{currentpage:currentpage+1} })} 
			disabled		= {currentpage === (Math.floor(data.length/userperpage))||data.length===0? true:false}
		/>
		</>
	)
};

export default Paging;
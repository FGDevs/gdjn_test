const INITIAL_STATE = {
	user:[],
	userperpage:4,
	currentpage:1,
	isLoading:false
};

export default (state=INITIAL_STATE, action) => {
		switch(action.type) {
			case 'SET' :
				return { ...state,...action.payload,isLoading:false};
			case 'LOADING' :
				return {...state,isLoading:true};
			case 'RESET' :
				return INITIAL_STATE;
			default :
				return state;
		};
};

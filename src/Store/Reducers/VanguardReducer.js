import { SETVANGUARDS } from '../Actions/VanguardActions';

const initialState = {};

function VanguardReducer(state = initialState, action){
	switch(action.type){
		case SETVANGUARDS:
			return action.vanguards;
		default:
			return state;
	}
}

export default VanguardReducer;
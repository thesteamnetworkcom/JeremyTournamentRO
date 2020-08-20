import { SETSTEPS } from '../Actions/StepsActions';

const initialState = {};

function StepReducer(state = initialState, action){
	switch(action.type){
		case SETSTEPS:
			return action.steps;
		default:
			return state;
	}
}

export default StepReducer;
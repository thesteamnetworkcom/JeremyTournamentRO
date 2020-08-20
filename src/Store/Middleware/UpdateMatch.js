import { UPDATEMATCHM }  from '../Actions/MatchActions';
import { UPDATEMATCH } from '../Actions/MatchActions';
import { UPDATESCORES } from '../Actions/PlayerActions';

const UpdateMatch = (store) => (next) => (action) => {
	switch(action.type){
		case UPDATEMATCHM:
			//Fire Update Match
			store.dispatch({
				type:UPDATEMATCH,
				details:action.details
			});
			//Fire Update Score
			store.dispatch({
				type:UPDATESCORES,
				matches:store.getState().matches
			});
			next(action);
			break;
		default:
			next(action);
			break;
	}
}

export default UpdateMatch;
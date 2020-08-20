import { PAIRMATCHONE } from '../Actions/MatchActions';
import { SUBMITPLAYERS } from '../Actions/PlayerActions';
import produce from 'immer';

const PairMatch1 = (store) => (next) => (action) => {
	switch(action.type){
		case PAIRMATCHONE:
			action=pairMatchOne(store,action);
			next(action);
			break;
		default:
			next(action);
			break;
	}
}

function pairMatchOne(store,action){
	const tempPlayers = produce(store.getState().players, draft=>{
		shuffle(draft)
	});
	store.dispatch({
		type:SUBMITPLAYERS,
		players:tempPlayers
	});
	let matches = {"Matches":[]}
	for (let i = 0; i < tempPlayers.length; i+=2){
		let newMatch = {};
		newMatch.player1 = tempPlayers[i].id;
		newMatch.player1wins = 0;
		newMatch.player2 = tempPlayers[i+1].id;
		newMatch.player2wins = 0;
		matches.Matches.push(newMatch);
	}
	action.matches = matches;
	return action;
}

function shuffle(a){
	for (let i = a.length - 1; i > 0; i--){
		const j = Math.floor(Math.random()*(i+1));
		[a[i],a[j]]=[a[j],a[i]];
	}
	for (let i = a.length - 1; i >=0; i--){
		a[i].FirstPairId=i+1;
	}
	return a;
}

export default PairMatch1;
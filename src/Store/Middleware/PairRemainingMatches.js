import { PAIRREMAININGMATCHES } from '../Actions/MatchActions';

const PairRemainingMatches = (store) => (next) => (action) =>{
	switch(action.type){
		case PAIRREMAININGMATCHES:
			action=pairRemainingMatches(store, action);
			next(action);
			break;
		default:
			next(action);
			break;
	}
}

function pairRemainingMatches(store, action){
	let players = store.getState().players;
	
	let matchTwo = {"Matches":[{},{},{},{}]};
	let matchThree = {"Matches":[{},{},{},{}]};
	let matchFour = {"Matches":[{},{},{},{}]};
	let matchFive = {"Matches":[{},{},{},{}]};
	let matchSix = {"Matches":[{},{},{},{}]};
	let matchSeven = {"Matches":[{},{},{},{}]};
	let conspiracyPod = {"Matches":[{},{}]};
	let conspiracy4v4 = {"Matches":[{}]};
	
	
	
	for(let i = 0; i < players.length; i++){
		switch(players[i].selected){
			case 1:
				matchTwo.Matches[0].player1 = players[i].id;
				matchTwo.Matches[0].player1wins = 0;
				matchThree.Matches[0].player1 = players[i].id;
				matchThree.Matches[0].player1wins = 0;
				matchFour.Matches[0].player1 = players[i].id;
				matchFour.Matches[0].player1wins = 0;
				matchFive.Matches[0].player1 = players[i].id;
				matchFive.Matches[0].player1wins = 0;
				matchSix.Matches[0].player1 = players[i].id;
				matchSix.Matches[0].player1wins = 0;
				matchSeven.Matches[0].player1 = players[i].id;
				matchSeven.Matches[0].player1wins = 0;
				
				conspiracyPod.Matches[0].player1 = players[i].id;
				conspiracyPod.Matches[0].player1pos = 0;
				conspiracy4v4.Matches[0].player1 = players[i].id;
				conspiracy4v4.Matches[0].player1pos = 0;
				break;
			case 2:
				matchTwo.Matches[1].player1 = players[i].id;
				matchTwo.Matches[1].player1wins = 0;
				matchThree.Matches[1].player1 = players[i].id;
				matchThree.Matches[1].player1wins = 0;
				matchFour.Matches[1].player1 = players[i].id;
				matchFour.Matches[1].player1wins = 0;
				matchFive.Matches[0].player2 = players[i].id;
				matchFive.Matches[0].player2wins = 0;
				matchSix.Matches[1].player1 = players[i].id;
				matchSix.Matches[1].player1wins = 0;
				matchSeven.Matches[1].player1 = players[i].id;
				matchSeven.Matches[1].player1wins = 0;
				
				conspiracyPod.Matches[0].player2 = players[i].id;
				conspiracyPod.Matches[0].player2pos = 0;
				conspiracy4v4.Matches[0].player2 = players[i].id;
				conspiracy4v4.Matches[0].player2pos = 0;
				break;
			case 17:
				matchTwo.Matches[2].player1 = players[i].id;
				matchTwo.Matches[2].player1wins = 0;
				matchThree.Matches[2].player1 = players[i].id;
				matchThree.Matches[2].player1wins = 0;
				matchFour.Matches[2].player1 = players[i].id;
				matchFour.Matches[2].player1wins = 0;
				matchFive.Matches[1].player1 = players[i].id;
				matchFive.Matches[1].player1wins = 0;
				matchSix.Matches[0].player2 = players[i].id;
				matchSix.Matches[0].player2wins = 0;
				matchSeven.Matches[1].player2 = players[i].id;
				matchSeven.Matches[1].player2wins = 0;
				
				conspiracyPod.Matches[0].player3 = players[i].id;
				conspiracyPod.Matches[0].player3pos = 0;
				conspiracy4v4.Matches[0].player3 = players[i].id;
				conspiracy4v4.Matches[0].player3pos = 0;
				break;
			case 4:
				matchTwo.Matches[3].player1 = players[i].id;
				matchTwo.Matches[3].player1wins = 0;
				matchThree.Matches[3].player1 = players[i].id;
				matchThree.Matches[3].player1wins = 0;
				matchFour.Matches[3].player1 = players[i].id;
				matchFour.Matches[3].player1wins = 0;
				matchFive.Matches[1].player2 = players[i].id;
				matchFive.Matches[1].player2wins = 0;
				matchSix.Matches[1].player2 = players[i].id;
				matchSix.Matches[1].player2wins = 0;
				matchSeven.Matches[0].player2 = players[i].id;
				matchSeven.Matches[0].player2wins = 0;
				
				conspiracyPod.Matches[0].player4 = players[i].id;
				conspiracyPod.Matches[0].player4pos = 0;
				conspiracy4v4.Matches[0].player4 = players[i].id;
				conspiracy4v4.Matches[0].player4pos = 0;
				break;
			case 11:
				matchTwo.Matches[3].player2 = players[i].id;
				matchTwo.Matches[3].player2wins = 0;
				matchThree.Matches[2].player2 = players[i].id;
				matchThree.Matches[2].player2wins = 0;
				matchFour.Matches[1].player2 = players[i].id;
				matchFour.Matches[1].player2wins = 0;
				matchFive.Matches[2].player2 = players[i].id;
				matchFive.Matches[2].player2wins = 0;
				matchSix.Matches[3].player1 = players[i].id;
				matchSix.Matches[3].player1wins = 0;
				matchSeven.Matches[3].player1 = players[i].id;
				matchSeven.Matches[3].player1wins = 0;
				
				conspiracyPod.Matches[1].player1 = players[i].id;
				conspiracyPod.Matches[1].player1pos = 0;
				conspiracy4v4.Matches[0].player5 = players[i].id;
				conspiracy4v4.Matches[0].player5pos = 0;
				break;
			case 12:
				matchTwo.Matches[0].player2 = players[i].id;
				matchTwo.Matches[0].player2wins = 0;
				matchThree.Matches[3].player2 = players[i].id;
				matchThree.Matches[3].player2wins = 0;
				matchFour.Matches[2].player2 = players[i].id;
				matchFour.Matches[2].player2wins = 0;
				matchFive.Matches[3].player1 = players[i].id;
				matchFive.Matches[3].player1wins = 0;
				matchSix.Matches[2].player2 = players[i].id;
				matchSix.Matches[2].player2wins = 0;
				matchSeven.Matches[3].player2 = players[i].id;
				matchSeven.Matches[3].player2wins = 0;
				
				conspiracyPod.Matches[1].player2 = players[i].id;
				conspiracyPod.Matches[1].player2pos = 0;
				conspiracy4v4.Matches[0].player6 = players[i].id;
				conspiracy4v4.Matches[0].player6pos = 0;
				break;
			case 7:
				matchTwo.Matches[1].player2 = players[i].id;
				matchTwo.Matches[1].player2wins = 0;
				matchThree.Matches[0].player2 = players[i].id;
				matchThree.Matches[0].player2wins = 0;
				matchFour.Matches[3].player2 = players[i].id;
				matchFour.Matches[3].player2wins = 0;
				matchFive.Matches[3].player2 = players[i].id;
				matchFive.Matches[3].player2wins = 0;
				matchSix.Matches[3].player2 = players[i].id;
				matchSix.Matches[3].player2wins = 0;
				matchSeven.Matches[2].player2 = players[i].id;
				matchSeven.Matches[2].player2wins = 0;
				
				conspiracyPod.Matches[1].player3 = players[i].id;
				conspiracyPod.Matches[1].player3pos = 0;
				conspiracy4v4.Matches[0].player7 = players[i].id;
				conspiracy4v4.Matches[0].player7pos = 0;
				break;
			case 14:
				matchTwo.Matches[2].player2 = players[i].id;
				matchTwo.Matches[2].player2wins = 0;
				matchThree.Matches[1].player2 = players[i].id;
				matchThree.Matches[1].player2wins = 0;
				matchFour.Matches[0].player2 = players[i].id;
				matchFour.Matches[0].player2wins = 0;
				matchFive.Matches[2].player1 = players[i].id;
				matchFive.Matches[2].player1wins = 0;
				matchSix.Matches[2].player1 = players[i].id;
				matchSix.Matches[2].player1wins = 0;
				matchSeven.Matches[2].player1 = players[i].id;
				matchSeven.Matches[2].player1wins = 0;
				
				conspiracyPod.Matches[1].player4 = players[i].id;
				conspiracyPod.Matches[1].player4pos = 0;
				conspiracy4v4.Matches[0].player8 = players[i].id;
				conspiracy4v4.Matches[0].player8pos = 0;
				break;
			default:
				break;
		}
	}
	
	let matches = {
		"matchTwo":matchTwo,
		"matchThree":matchThree,
		"matchFour":matchFour,
		"matchFive":matchFive,
		"matchSix":matchSix,
		"matchSeven":matchSeven,
		"conspiracyPod":conspiracyPod,
		"conspiracy4v4":conspiracy4v4
	}
	
	action.matches = matches;
	return action
	
	
}

export default PairRemainingMatches;
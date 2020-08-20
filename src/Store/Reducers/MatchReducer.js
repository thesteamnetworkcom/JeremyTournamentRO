import { PAIRMATCHONE } from '../Actions/MatchActions';
import { PAIRREMAININGMATCHES } from '../Actions/MatchActions';
import { SETMATCHES } from '../Actions/MatchActions';
import { UPDATEMATCH } from '../Actions/MatchActions';
import { PAIRFINALSROUND1 } from '../Actions/MatchActions';
import { PAIRFINALSROUND2 } from '../Actions/MatchActions';
import { PAIRFINALSROUND3 } from '../Actions/MatchActions';
import produce from "immer";
import { API } from '../../Assets/VARS';

const initialState = {
	
}

function MatchReducer(state = initialState, action){
	switch(action.type){
		case "RESET":
			var newMatchesR = {};
			fetch(API + '/data/matches',{
				method:'POST',
				headers:{
					'Accept':'applicaton/json',
					'Content-Type':'application/json'
				},
				body: JSON.stringify(newMatchesR)
			});
			return newMatchesR;
		case PAIRFINALSROUND3:
			var newMatches = produce(state, draft => {
				draft.finalsRoundThree = {};
				draft.finalsRoundThree.Matches = [];
				
				let newMatch1 = {}
				newMatch1.player1 = (function(){
					if(draft.finalsRoundTwo.Matches[0].player1wins > draft.finalsRoundTwo.Matches[0].player2wins){
						return draft.finalsRoundTwo.Matches[0].player1;
					}else{
						return draft.finalsRoundTwo.Matches[0].player2;
					}
				})()

				newMatch1.player1wins = 0;
				newMatch1.player2 = (function(){
					if(draft.finalsRoundTwo.Matches[1].player1wins > draft.finalsRoundTwo.Matches[1].player2wins){
						return draft.finalsRoundTwo.Matches[1].player1;
					}else{
						return draft.finalsRoundTwo.Matches[1].player2;
					}
				})()
				newMatch1.player2wins = 0;
				draft.finalsRoundThree.Matches.push(newMatch1);
				
				let newMatch2 = {}
				newMatch2.player1 = (function(){
					if(draft.finalsRoundTwo.Matches[2].player1wins > draft.finalsRoundTwo.Matches[2].player2wins){
						return draft.finalsRoundTwo.Matches[2].player1;
					}else{
						return draft.finalsRoundTwo.Matches[2].player2;
					}
				})();
				newMatch2.player1wins = 0;
				newMatch2.player2 = (function(){
					if(draft.finalsRoundTwo.Matches[3].player1wins > draft.finalsRoundTwo.Matches[3].player2wins){
						return draft.finalsRoundTwo.Matches[3].player1;
					}else{
						return draft.finalsRoundTwo.Matches[3].player2;
					}
				})();
				newMatch2.player2wins = 0;
				draft.finalsRoundThree.Matches.push(newMatch2);
				
				let newMatch3 = {}
				newMatch3.player1 = (function(){
					if(draft.finalsRoundTwo.Matches[0].player2wins < draft.finalsRoundTwo.Matches[0].player1wins){
						return draft.finalsRoundTwo.Matches[0].player2;
					}else{
						return draft.finalsRoundTwo.Matches[0].player1;
					}
				})()
				newMatch3.player1wins = 0;
				newMatch3.player2 = (function(){
					if(draft.finalsRoundTwo.Matches[1].player2wins < draft.finalsRoundTwo.Matches[1].player1wins){
						return draft.finalsRoundTwo.Matches[1].player2;
					}else{
						return draft.finalsRoundTwo.Matches[1].player1;
					}
				})();
				newMatch3.player2wins = 0;
				draft.finalsRoundThree.Matches.push(newMatch3);
				
				let newMatch4 = {}
				newMatch4.player1 = (function(){
					if(draft.finalsRoundTwo.Matches[2].player2wins < draft.finalsRoundTwo.Matches[2].player1wins){
						return draft.finalsRoundTwo.Matches[2].player2;
					}else{
						return draft.finalsRoundTwo.Matches[2].player1;
					}
				})();
				newMatch4.player1wins = 0;
				newMatch4.player2 = (function(){
					if(draft.finalsRoundTwo.Matches[3].player2wins < draft.finalsRoundTwo.Matches[3].player1wins){
						return draft.finalsRoundTwo.Matches[3].player2;
					}else{
						return draft.finalsRoundTwo.Matches[3].player1;
					}
				})();
				newMatch4.player2wins = 0;
				draft.finalsRoundThree.Matches.push(newMatch4);
			})
			fetch(API + '/data/matches',{
				method:'POST',
				headers:{
					'Accept':'applicaton/json',
					'Content-Type':'application/json'
				},
				body: JSON.stringify(newMatches)
			});
			return newMatches;
		case PAIRFINALSROUND2:
			var newMatchesf2 = produce(state, draft => {
				draft.finalsRoundTwo = {};
				draft.finalsRoundTwo.Matches = [];
				
				let newMatch1 = {}
				newMatch1.player1 = (function(){
					if(draft.finalsRoundOne.Matches[0].player1wins > draft.finalsRoundOne.Matches[0].player2wins){
						return draft.finalsRoundOne.Matches[0].player1;
					}else{
						return draft.finalsRoundOne.Matches[0].player2;
					}
				})()

				newMatch1.player1wins = 0;
				newMatch1.player2 = (function(){
					if(draft.finalsRoundOne.Matches[1].player1wins > draft.finalsRoundOne.Matches[1].player2wins){
						return draft.finalsRoundOne.Matches[1].player1;
					}else{
						return draft.finalsRoundOne.Matches[1].player2;
					}
				})()
				newMatch1.player2wins = 0;
				draft.finalsRoundTwo.Matches.push(newMatch1);
				
				let newMatch2 = {}
				newMatch2.player1 = (function(){
					if(draft.finalsRoundOne.Matches[2].player1wins > draft.finalsRoundOne.Matches[2].player2wins){
						return draft.finalsRoundOne.Matches[2].player1;
					}else{
						return draft.finalsRoundOne.Matches[2].player2;
					}
				})();
				newMatch2.player1wins = 0;
				newMatch2.player2 = (function(){
					if(draft.finalsRoundOne.Matches[3].player1wins > draft.finalsRoundOne.Matches[3].player2wins){
						return draft.finalsRoundOne.Matches[3].player1;
					}else{
						return draft.finalsRoundOne.Matches[3].player2;
					}
				})();
				newMatch2.player2wins = 0;
				draft.finalsRoundTwo.Matches.push(newMatch2);
				
				let newMatch3 = {}
				newMatch3.player1 = (function(){
					if(draft.finalsRoundOne.Matches[0].player2wins < draft.finalsRoundOne.Matches[0].player1wins){
						return draft.finalsRoundOne.Matches[0].player2;
					}else{
						return draft.finalsRoundOne.Matches[0].player1;
					}
				})()
				newMatch3.player1wins = 0;
				newMatch3.player2 = (function(){
					if(draft.finalsRoundOne.Matches[1].player2wins < draft.finalsRoundOne.Matches[1].player1wins){
						return draft.finalsRoundOne.Matches[1].player2;
					}else{
						return draft.finalsRoundOne.Matches[1].player1;
					}
				})();
				newMatch3.player2wins = 0;
				draft.finalsRoundTwo.Matches.push(newMatch3);
				
				let newMatch4 = {}
				newMatch4.player1 = (function(){
					if(draft.finalsRoundOne.Matches[2].player2wins < draft.finalsRoundOne.Matches[2].player1wins){
						return draft.finalsRoundOne.Matches[2].player2;
					}else{
						return draft.finalsRoundOne.Matches[2].player1;
					}
				})();
				newMatch4.player1wins = 0;
				newMatch4.player2 = (function(){
					if(draft.finalsRoundOne.Matches[3].player2wins < draft.finalsRoundOne.Matches[3].player1wins){
						return draft.finalsRoundOne.Matches[3].player2;
					}else{
						return draft.finalsRoundOne.Matches[3].player1;
					}
				})();
				newMatch4.player2wins = 0;
				draft.finalsRoundTwo.Matches.push(newMatch4);
			})
			fetch(API + '/data/matches',{
				method:'POST',
				headers:{
					'Accept':'applicaton/json',
					'Content-Type':'application/json'
				},
				body: JSON.stringify(newMatchesf2)
			});
			return newMatchesf2;
		case PAIRFINALSROUND1:
			var newMatchesRD1 = produce(state, draft => {
				var sortedPlayers = action.players.slice().sort(function(a,b){return b.points - a.points});
				draft.finalsRoundOne = {};
				draft.finalsRoundOne.Matches = [];
				let newMatch1 = {};
				newMatch1.player1 = sortedPlayers[0].id;
				newMatch1.player1wins = 0;
				newMatch1.player2 = sortedPlayers[1].id;
				newMatch1.player2wins = 0;
				draft.finalsRoundOne.Matches.push(newMatch1);
				let newMatch2 = {};
				newMatch2.player1 = sortedPlayers[2].id;
				newMatch2.player1wins = 0;
				newMatch2.player2 = sortedPlayers[3].id;
				newMatch2.player2wins = 0;
				draft.finalsRoundOne.Matches.push(newMatch2);
				let newMatch3 = {};
				newMatch3.player1 = sortedPlayers[4].id;
				newMatch3.player1wins = 0;
				newMatch3.player2 = sortedPlayers[5].id;
				newMatch3.player2wins = 0;
				draft.finalsRoundOne.Matches.push(newMatch3);
				let newMatch4 = {};
				newMatch4.player1 = sortedPlayers[6].id;
				newMatch4.player1wins = 0;
				newMatch4.player2 = sortedPlayers[7].id;
				newMatch4.player2wins = 0;
				draft.finalsRoundOne.Matches.push(newMatch4);
			});
			fetch(API + '/data/matches',{
				method:'POST',
				headers:{
					'Accept':'applicaton/json',
					'Content-Type':'application/json'
				},
				body: JSON.stringify(newMatchesRD1)
			});
			return newMatchesRD1;
		case PAIRMATCHONE:
			var newMatchesM1 = produce(state, draft => {
				draft.matchOne = action.matches;
			})
			fetch(API + '/data/matches',{
				method:'POST',
				headers:{
					'Accept':'applicaton/json',
					'Content-Type':'application/json'
				},
				body: JSON.stringify(newMatchesM1)
			});
			return newMatchesM1;
		case PAIRREMAININGMATCHES:
			var newMatchesRM = produce(state, draft => {
				draft.matchTwo = action.matches.matchTwo;
				draft.matchThree = action.matches.matchThree;
				draft.matchFour = action.matches.matchFour;
				draft.matchFive = action.matches.matchFive;
				draft.matchSix = action.matches.matchSix;
				draft.matchSeven = action.matches.matchSeven;
				draft.conspiracyPod = action.matches.conspiracyPod;
				draft.conspiracy4v4 = action.matches.conspiracy4v4;
			})
			fetch(API + '/data/matches',{
				method:'POST',
				headers:{
					'Accept':'application/json',
					'Content-Type':'application/json'
				},
				body: JSON.stringify(newMatchesRM)
			});
			return newMatchesRM;
		case UPDATEMATCH:
			let newMatches2;
			if(action.details.group === "conspiracy4v4"){
				if(action.details.target === 1){
					newMatches2 = produce(state, draft => {
						draft[action.details.group].Matches[action.details.index].player1pos = action.details.wins
						draft[action.details.group].Matches[action.details.index].player2pos = action.details.wins
						draft[action.details.group].Matches[action.details.index].player3pos = action.details.wins
						draft[action.details.group].Matches[action.details.index].player4pos = action.details.wins
						draft[action.details.group].Matches[action.details.index].player5pos = 0
						draft[action.details.group].Matches[action.details.index].player6pos = 0
						draft[action.details.group].Matches[action.details.index].player7pos = 0
						draft[action.details.group].Matches[action.details.index].player8pos = 0
					});
				}else if(action.details.target === 2){
					newMatches2 = produce(state, draft => {
						draft[action.details.group].Matches[action.details.index].player1pos = 0
						draft[action.details.group].Matches[action.details.index].player2pos = 0
						draft[action.details.group].Matches[action.details.index].player3pos = 0
						draft[action.details.group].Matches[action.details.index].player4pos = 0
						draft[action.details.group].Matches[action.details.index].player5pos = action.details.wins
						draft[action.details.group].Matches[action.details.index].player6pos = action.details.wins
						draft[action.details.group].Matches[action.details.index].player7pos = action.details.wins
						draft[action.details.group].Matches[action.details.index].player8pos = action.details.wins
					});
				}
				
			}else{
				newMatches2 = produce(state, draft => {
					draft[action.details.group].Matches[action.details.index][action.details.target]=action.details.wins;
				});
			}
			if(newMatches2 === undefined){
				newMatches2 = state;
			}
			fetch(API + '/data/matches',{
				method:'POST',
				headers:{
					'Accept':'applicaton/json',
					'Content-Type':'application/json'
				},
				body: JSON.stringify(newMatches2)
			})
			
			return newMatches2;
		case SETMATCHES:
			return action.matches
		default:
			return state;
	}
}

export default MatchReducer;
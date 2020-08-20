import { SUBMITNAMES } from '../Actions/PlayerActions';
import { SUBMITVANGUARDS } from '../Actions/PlayerActions';
import { SETPLAYERS } from '../Actions/PlayerActions';
import { SUBMITPLAYERS } from '../Actions/PlayerActions';
import { UPDATESCORES } from '../Actions/PlayerActions';
import { CLEARTEAMS } from '../Actions/PlayerActions';
import { SELECTPLAYERS } from '../Actions/PlayerActions';
import produce from "immer";
import { API } from '../../Assets/VARS'

const initialState = {};

function PlayerReducer(state = initialState, action){
	switch(action.type){
		case "RESET":
			let resetState = produce(state, draft=>{
				for(let i = 0; i < draft.length; i++){
					draft[i].charName='';
					draft[i].vanguardID='';
					draft[i].FirstPairId='';
					draft[i].points='';
					draft[i].selected='';
				}
			})
			fetch(API + '/data/players',{
				method:'POST',
				headers:{
					'Accept':'application/json',
					'Content-Type':'application/json'
				},
				body:JSON.stringify(resetState)
			})
			return resetState;
		case SELECTPLAYERS:
			let SelectPlayersState = produce(state, draft=>{
				for(let i = 0; i < draft.length; i++){
					if(draft[i].id === action.details.oldID){
						draft[i].selected = 0;
					}
					if(draft[i].id === action.details.event.target.value){
						draft[i].selected = action.details.val
					}
					if(draft[i].id === action.details.opponent){
						draft[i].selected = action.details.val+10
					}
					if(draft[i].id === action.details.oldOpponent){
						draft[i].selected = 0
					}
				}
			});
			fetch(API + '/data/players',{
				method:'POST',
				headers:{
					'Accept':'application/json',
					'Content-Type':'application/json'
				},
				body:JSON.stringify(SelectPlayersState)
			})
			return SelectPlayersState;
		case CLEARTEAMS:
			let ClearTeamState = produce(state, draft=>{
				for(let i = 0; i < draft.length; i++){
					draft[i].selected = 0
				}
			});
			fetch(API + '/data/players',{
				method:'POST',
				headers:{
					'Accept':'application/json',
					'Content-Type':'application/json'
				},
				body:JSON.stringify(ClearTeamState)
			})
			return ClearTeamState;
		case UPDATESCORES:
			let scoreArray = [];
			for(let i = 0; i < state.length; i++){
				let count = 0;
				let id = state[i].id;
				for(let j = 0; j < action.matches.matchOne.Matches.length; j++){
					if(action.matches.matchOne.Matches[j].player1 === id && action.matches.matchOne.Matches[j].player1wins > action.matches.matchOne.Matches[j].player2wins){
						count = count + 2;
					}else if(action.matches.matchOne.Matches[j].player2 === id && action.matches.matchOne.Matches[j].player2wins > action.matches.matchOne.Matches[j].player1wins){
						count = count + 2;
					}
				}
				if(action.matches.matchTwo !== undefined){
					for(let j = 0; j < action.matches.matchTwo.Matches.length; j++){
						if(action.matches.matchTwo.Matches[j].player1 === id && action.matches.matchTwo.Matches[j].player1wins > action.matches.matchTwo.Matches[j].player2wins){
							count = count + 2;
						}else if(action.matches.matchTwo.Matches[j].player2 === id && action.matches.matchTwo.Matches[j].player2wins > action.matches.matchTwo.Matches[j].player1wins){
							count = count + 2;
						}
					}
				}
				if(action.matches.matchThree !== undefined){
					for(let j = 0; j < action.matches.matchThree.Matches.length; j++){
						if(action.matches.matchThree.Matches[j].player1 === id && action.matches.matchThree.Matches[j].player1wins > action.matches.matchThree.Matches[j].player2wins){
							count = count + 2;
						}else if(action.matches.matchThree.Matches[j].player2 === id && action.matches.matchThree.Matches[j].player2wins > action.matches.matchThree.Matches[j].player1wins){
							count = count + 2;
						}
					}
				}
				if(action.matches.matchFour !== undefined){
					for(let j = 0; j < action.matches.matchFour.Matches.length; j++){
						if(action.matches.matchFour.Matches[j].player1 === id && action.matches.matchFour.Matches[j].player1wins > action.matches.matchFour.Matches[j].player2wins){
							count = count + 2;
						}else if(action.matches.matchFour.Matches[j].player2 === id && action.matches.matchFour.Matches[j].player2wins > action.matches.matchFour.Matches[j].player1wins){
							count = count + 2;
						}
					}
				}
				if(action.matches.matchFive !== undefined){
					for(let j = 0; j < action.matches.matchFive.Matches.length; j++){
						if(action.matches.matchFive.Matches[j].player1 === id && action.matches.matchFive.Matches[j].player1wins > action.matches.matchFive.Matches[j].player2wins){
							count = count + 2;
						}else if(action.matches.matchFive.Matches[j].player2 === id && action.matches.matchFive.Matches[j].player2wins > action.matches.matchFive.Matches[j].player1wins){
							count = count + 2;
						}
					}
				}
				if(action.matches.matchSix !== undefined){
					for(let j = 0; j < action.matches.matchSix.Matches.length; j++){
						if(action.matches.matchSix.Matches[j].player1 === id && action.matches.matchSix.Matches[j].player1wins > action.matches.matchSix.Matches[j].player2wins){
							count = count + 2;
						}else if(action.matches.matchSix.Matches[j].player2 === id && action.matches.matchSix.Matches[j].player2wins > action.matches.matchSix.Matches[j].player1wins){
							count = count + 2;
						}
					}
				}
				if(action.matches.matchSeven !== undefined){
					for(let j = 0; j < action.matches.matchSeven.Matches.length; j++){
						if(action.matches.matchSeven.Matches[j].player1 === id && action.matches.matchSeven.Matches[j].player1wins > action.matches.matchSeven.Matches[j].player2wins){
							count = count + 2;
						}else if(action.matches.matchSeven.Matches[j].player2 === id && action.matches.matchSeven.Matches[j].player2wins > action.matches.matchSeven.Matches[j].player1wins){
							count = count + 2;
						}
					}
				}
				if(action.matches.conspiracyPod !== undefined){
					for(let j = 0; j < action.matches.conspiracyPod.Matches.length; j++){
						if(action.matches.conspiracyPod.Matches[j].player1 === id && action.matches.conspiracyPod.Matches[j].player1pos !== 0 && action.matches.conspiracyPod.Matches[j].player1pos !== undefined){
							count = count + (4 - action.matches.conspiracyPod.Matches[j].player1pos);
						}
						if(action.matches.conspiracyPod.Matches[j].player2 === id && action.matches.conspiracyPod.Matches[j].player2pos !== 0 && action.matches.conspiracyPod.Matches[j].player2pos !== undefined){
							count = count + (4 - action.matches.conspiracyPod.Matches[j].player2pos);
						}
						if(action.matches.conspiracyPod.Matches[j].player3 === id && action.matches.conspiracyPod.Matches[j].player3pos !== 0 && action.matches.conspiracyPod.Matches[j].player3pos !== undefined){
							count = count + (4 - action.matches.conspiracyPod.Matches[j].player3pos);
						}
						if(action.matches.conspiracyPod.Matches[j].player4 === id && action.matches.conspiracyPod.Matches[j].player4pos !== 0 && action.matches.conspiracyPod.Matches[j].player4pos !== undefined){
							count = count + (4 - action.matches.conspiracyPod.Matches[j].player4pos);
						}
					}
				}
				if(action.matches.conspiracy4v4 !== undefined){
					for(let j = 0; j < action.matches.conspiracy4v4.Matches.length; j++){
						if(action.matches.conspiracy4v4.Matches[j].player1 === id){
							count = count + (4*action.matches.conspiracy4v4.Matches[j].player1pos)
						}
						if(action.matches.conspiracy4v4.Matches[j].player2 === id){
							count = count + (4*action.matches.conspiracy4v4.Matches[j].player2pos)
						}
						if(action.matches.conspiracy4v4.Matches[j].player3 === id){
							count = count + (4*action.matches.conspiracy4v4.Matches[j].player3pos)
						}
						if(action.matches.conspiracy4v4.Matches[j].player4 === id){
							count = count + (4*action.matches.conspiracy4v4.Matches[j].player4pos)
						}
						if(action.matches.conspiracy4v4.Matches[j].player5 === id){
							count = count + (4*action.matches.conspiracy4v4.Matches[j].player5pos)
						}
						if(action.matches.conspiracy4v4.Matches[j].player6 === id){
							count = count + (4*action.matches.conspiracy4v4.Matches[j].player6pos)
						}
						if(action.matches.conspiracy4v4.Matches[j].player7 === id){
							count = count + (4*action.matches.conspiracy4v4.Matches[j].player7pos)
						}
						if(action.matches.conspiracy4v4.Matches[j].player8 === id){
							count = count + (4*action.matches.conspiracy4v4.Matches[j].player8pos)
						}
					}
				}
				if(action.matches.finalsRoundOne !== undefined){
					for(let j = 0; j < action.matches.finalsRoundOne.Matches.length; j++){
						if(action.matches.finalsRoundOne.Matches[j].player1 === id && action.matches.finalsRoundOne.Matches[j].player1wins > action.matches.finalsRoundOne.Matches[j].player2wins){
							count = count + 2;
						}else if(action.matches.finalsRoundOne.Matches[j].player2 === id && action.matches.finalsRoundOne.Matches[j].player2wins > action.matches.finalsRoundOne.Matches[j].player1wins){
							count = count + 2;
						}
					}
				}
				if(action.matches.finalsRoundTwo !== undefined){
					for(let j = 0; j < action.matches.finalsRoundTwo.Matches.length; j++){
						if(action.matches.finalsRoundTwo.Matches[j].player1 === id && action.matches.finalsRoundTwo.Matches[j].player1wins > action.matches.finalsRoundTwo.Matches[j].player2wins){
							count = count + 2;
						}else if(action.matches.finalsRoundTwo.Matches[j].player2 === id && action.matches.finalsRoundTwo.Matches[j].player2wins > action.matches.finalsRoundTwo.Matches[j].player1wins){
							count = count + 2;
						}
					}
				}
				if(action.matches.finalsRoundThree !== undefined){
					for(let j = 0; j < action.matches.finalsRoundThree.Matches.length; j++){
						if(action.matches.finalsRoundThree.Matches[j].player1 === id && action.matches.finalsRoundThree.Matches[j].player1wins > action.matches.finalsRoundThree.Matches[j].player2wins){
							count = count + 2;
						}else if(action.matches.finalsRoundThree.Matches[j].player2 === id && action.matches.finalsRoundThree.Matches[j].player2wins > action.matches.finalsRoundThree.Matches[j].player1wins){
							count = count + 2;
						}
					}
				}
				scoreArray.push(count);
			}
			let newState = produce(state, draft =>{
				for(let i = 0; i < draft.length; i++){
					draft[i].points = scoreArray[i];
				}
			});
			fetch(API + '/data/players',{
				method:'POST',
				headers:{
					'Accept':'application/json',
					'Content-Type':'application/json'
				},
				body:JSON.stringify(newState)
			})
			return newState;
		case SUBMITNAMES:
			fetch(API + '/data/players',{
				method:'POST',
				headers: {
      				'Accept': 'application/json',
      				'Content-Type': 'application/json'
    			},
				body: JSON.stringify(action.names)
			});
			return action.names;
		case SUBMITVANGUARDS:
			fetch(API + '/data/players',{
				method:'POST',
				headers:{
					'Accept':'application/json',
					'Content-Type':'application/json'
				},
				body: JSON.stringify(action.vanguards)
			});
			return action.vanguards;
		case SUBMITPLAYERS:
			fetch(API + '/data/players',{
				method:'POST',
				headers:{
					'Accept':'application/json',
					'Content-Type':'application/json'
				},
				body: JSON.stringify(action.players)
			})
			return action.players;
		case SETPLAYERS:
			return action.players;
		default:
			return state;
	}
}

export default PlayerReducer;
import { API } from '../../Assets/VARS'

export const PAIRMATCHONE = 'PAIRMATCHONE';
export const PAIRREMAININGMATCHES = 'PAIRREMAININGMATCHES';
export const SETMATCHES = 'SETMATCHES';
export const UPDATEMATCHM = 'UPDATEMATCHM';
export const UPDATEMATCH = 'UPDATEMATCH';
export const PAIRFINALSROUND1 = 'PAIRFINALSROUND1';
export const PAIRFINALSROUND2 = 'PAIRFINALSROUND2';
export const PAIRFINALSROUND3 = 'PAIRFINALSROUND3';



function fetchMatches(){
	return (dispatch) => {
		fetch(API + '/data/matches')
		.then(res => res.json())
		.then(res => {
			dispatch({
				type:SETMATCHES,
				matches:res.Matches
			})
			return res.Matches
		})
	}
}

export default fetchMatches;
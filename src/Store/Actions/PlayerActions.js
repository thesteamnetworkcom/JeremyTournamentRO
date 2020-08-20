import { API } from '../../Assets/VARS';
export const SUBMITNAMES = 'SUBMITNAMES';
export const SUBMITVANGUARDS = 'SUBMITVANGUARDS';
export const SUBMITPLAYERS = 'SUBMITPLAYERS';
export const SETPLAYERS = 'SETPLAYERS';
export const UPDATESCORES = 'UPDATESCORES';
export const CLEARTEAMS = 'CLEARTEAMS';
export const SELECTPLAYERS = 'SELECTPLAYERS';



function fetchNames(){
	console.log(API + '/data/players');
	return (dispatch) => {
		fetch(API + '/data/players')
		.then(res => res.json())
		.then(res => {
			dispatch({
				type:SETPLAYERS,
				players:res.Players
			});
			return res.Players;
		})
	}
}

export default fetchNames;
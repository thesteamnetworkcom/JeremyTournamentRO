import { API } from '../../Assets/VARS';
export const SETVANGUARDS = 'SETVANGUARDS';



function fetchVanguards(){
	return (dispatch) => {
		fetch(API + '/data/vanguards')
		.then(res => res.json())
		.then(res => {
			dispatch({
				type:SETVANGUARDS,
				vanguards:res.Vanguards
			});
			return res.Vanguards;
		})
	}
}

export default fetchVanguards;
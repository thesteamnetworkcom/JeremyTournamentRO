import { API } from '../../Assets/VARS';
export const SETSTEPS = 'SETSTEPS';



function fetchSteps(){
	return (dispatch) => {
		fetch(API + '/data/steps')
		.then(res => res.json())
		.then(res => {
			dispatch({
				type:SETSTEPS,
				steps:res.Steps
			});
			return res.Steps;
		})
	}
}

export default fetchSteps;
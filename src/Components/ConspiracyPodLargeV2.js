import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PositionSelect from '../Components/PositionSelect';


const mapStateToProps = state => {
	return {
		matches:state.matches,
		players:state.players,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		updateConPod: (match, index, group, target, pos) => dispatch({
			type: "UPDATEMATCHM",
			details:{
				match:match,
				index:index,
				group:group,
				target:target,
				wins:pos,
			}
		})
	}
}
					   
const styles = () => ({
	flex:{
		display:'flex',
		'justify-content':'center',
		'align-items':'stretch',
		'flex-direction':'column',
		'flex-grow':1,
	},
	top:{
		display:'flex',
		'flex-grow':1,
	},
	bottom:{
		display:'flex',
		'flex-grow':1,
	},
	pwrapper1:{
		backgroundColor:'rgba(255,255,255,.5)',
		transform:'skewX(20deg)',
		'flex-grow':1,
		display:'flex',
		'flex-direction':'column',
		'align-items':'center',
		'justify-content':'center',
	},
	flipBack1:{
		transform:'skewX(-20deg)',
		display:'flex',
		'flex-direction':'column',
		'align-items':'center',
		'justify-content':'center',
	},
	pwrapper2:{
		backgroundColor:'rgba(255,255,255,.5)',
		transform:'skewX(-20deg)',
		'flex-grow':1,
		display:'flex',
		'flex-direction':'column',
		'align-items':'center',
		'justify-content':'center',
	},
	flipBack2:{
		transform:'skewX(20deg)',
		display:'flex',
		'flex-direction':'column',
		'align-items':'center',
		'justify-content':'center',
	}
})

function getPlayer(players, id){
	for(let i = 0; i < players.length; i++){
		if(players[i].id === id){
			return(<>{players[i].name}</>)
		}
	}
}


const ConnectedConspiracyPodLarge = (props) => {
	const { classes } = props;
	const handleChange = (tgt, event) => {
		props.updateConPod(
			props.match,
			props.index,
			"conspiracyPod",
			tgt,
			event.target.value
		)
	}
	return(
		<div className={classes.flex}>
			<div className={classes.top}>
				<div className={classes.pwrapper1}>
					<div className={classes.flipBack1}>
						<span>{getPlayer(props.players, props.group[0])}</span><br/>
						<PositionSelect change={handleChange} pos={props.match.player1pos} tgt="player1pos"/>
					</div>
				</div>
				<div className={classes.pwrapper2}>
					<div className={classes.flipBack2}>
						<span>{getPlayer(props.players, props.group[1])}</span><br/>
						<PositionSelect change={handleChange} pos={props.match.player2pos} tgt="player2pos"/>
					</div>
				</div>
			</div>
			<div className={classes.bottom}>
				<div className={classes.pwrapper2}>
					<div className={classes.flipBack2}>
						<span>{getPlayer(props.players, props.group[2])}</span><br/>
						<PositionSelect change={handleChange} pos={props.match.player3pos} tgt="player3pos"/>
					</div>
				</div>
				<div className={classes.pwrapper1}>
					<div className={classes.flipBack1}>
						<span>{getPlayer(props.players, props.group[3])}</span><br/>
						<PositionSelect change={handleChange} pos={props.match.player4pos} tgt="player4pos"/>
					</div>
				</div>
			</div>
		</div>
	)
}

const ConspiracyPodLarge = connect(mapStateToProps, mapDispatchToProps)(ConnectedConspiracyPodLarge);

export default withStyles(styles)(ConspiracyPodLarge);
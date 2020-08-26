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
		'align-items':'center',
		'flex-grow':1,
		'& >div':{
			'flex-grow':1
		}
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
			<div>
				<span>{getPlayer(props.players, props.group[0])}</span><br/>
				<PositionSelect change={handleChange} pos={props.match.player1pos} tgt="player1pos"/>
			</div>
			<div>
				<span>{getPlayer(props.players, props.group[1])}</span><br/>
				<PositionSelect change={handleChange} pos={props.match.player2pos} tgt="player2pos"/>
			</div>
			<div>
				<span>{getPlayer(props.players, props.group[2])}</span><br/>
				<PositionSelect change={handleChange} pos={props.match.player3pos} tgt="player3pos"/>
			</div>
			<div>
				<span>{getPlayer(props.players, props.group[3])}</span><br/>
				<PositionSelect change={handleChange} pos={props.match.player4pos} tgt="player4pos"/>
			</div>
		</div>
	)
}

const ConspiracyPodLarge = connect(mapStateToProps, mapDispatchToProps)(ConnectedConspiracyPodLarge);

export default withStyles(styles)(ConspiracyPodLarge);
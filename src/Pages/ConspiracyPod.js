import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import ConspiracyPodLarge from '../Components/ConspiracyPodLarge';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
		matches:state.matches,
	}
}

const styles = () => ({
	fullScreen:{
		width:'100%',
		height:'100%',
		backgroundColor:'#052429',
		'text-align':'center',
		display:'flex',
		'flex-direction':'column',
	},
	pad:{
		padding:10,
	},
	wrapper:{
		'flex-grow':1,
		color:'white',
	}
})

const ConnectedConspiracyPod = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"ConspiracyPod",
	})
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			<div className={classes.wrapper}>
			{Object.keys(props.players).length === 0 || Object.keys(props.matches).length === 0 ? "" :
			<>
			<ConspiracyPodLarge index={0} players={props.players} group={
					[props.matches.conspiracyPod.Matches[0].player1,
					 props.matches.conspiracyPod.Matches[0].player2,
					 props.matches.conspiracyPod.Matches[0].player3,
					 props.matches.conspiracyPod.Matches[0].player4]} match={props.matches.conspiracyPod.Matches[0]}/>
			<ConspiracyPodLarge index={1} players={props.players} group={
					[props.matches.conspiracyPod.Matches[1].player1,
					 props.matches.conspiracyPod.Matches[1].player2,
					 props.matches.conspiracyPod.Matches[1].player3,
					 props.matches.conspiracyPod.Matches[1].player4]} match={props.matches.conspiracyPod.Matches[1]}/>
			
			</>
			}
			</div>
		</div>
	)
}

const ConspiracyPod = connect(mapStateToProps)(ConnectedConspiracyPod);

export default withStyles(styles)(ConspiracyPod);
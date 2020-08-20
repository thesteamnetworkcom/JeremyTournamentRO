import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const mapStateToProps = state => {
	return {
		matches:state.matches,
		players:state.players
	}
}

const styles = () => ({
	matchMini:{
		height:'100%',
		display:'flex',
		'flex-direction':'column',
		'justify-content':'center',
		'align-items':'center',
		fontSize:20,
		color:'white',
	}
})

function getPlayer(players, id){
	for(let i = 0; i < players.length; i++){
		if(players[i].id === id){
			return (<>{players[i].name}</>)
		}
	}
}

const ConnectedConspiracy4v4Mini = (props) => {
	const { classes } = props;
	return(
		<div className={classes.matchMini}>
			<div>
				<span>Team 1:</span>
				<span>{getPlayer(props.players, props.team1[0])} </span>
				<span>{getPlayer(props.players, props.team1[1])} </span>
				<span>{getPlayer(props.players, props.team1[2])} </span>
				<span>{getPlayer(props.players, props.team1[3])} </span>
			</div>
			<div>
				<span>Team 2:</span>
				<span>{getPlayer(props.players, props.team2[0])} </span>
				<span>{getPlayer(props.players, props.team2[1])} </span>
				<span>{getPlayer(props.players, props.team2[2])} </span>
				<span>{getPlayer(props.players, props.team2[3])} </span>
			</div>
		</div>
	)
}

const Conspiracy4v4Mini = connect(mapStateToProps)(ConnectedConspiracy4v4Mini);

export default withStyles(styles)(Conspiracy4v4Mini);

import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const mapStateToProps = state => {
	return {
		matches:state.matches,
		players:state.players,
	}
}

const styles = () => ({
	podWrapper:{
		height:'50%',
		display:'flex',
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

const ConnectedConspiracyPodMini = (props) => {
	const { classes } = props;
	return(
		<div className={classes.podWrapper}>
			<span>POD: </span>
			<span>
				{getPlayer(props.players, props.group[0])}
			</span>
			<span> vs </span>
			<span>
				{getPlayer(props.players, props.group[1])}
			</span>
			<span> vs </span>
			<span>
				{getPlayer(props.players, props.group[2])}
			</span>
			<span> vs </span>
			<span>
				{getPlayer(props.players, props.group[3])}
			</span>
		</div>
	)
}

const ConspiracyPodMini = connect(mapStateToProps)(ConnectedConspiracyPodMini);

export default withStyles(styles)(ConspiracyPodMini);
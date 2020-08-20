import React from 'react';
import { connect } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const mapStateToProps = state => {
	return {
		matches:state.matches,
		players:state.players,
	}
};

const useStyles = makeStyles({
	matchWrapper:{
		height:props=> props.quarter ? '25%' : '50%',
		display:'flex',
		'justify-content':'center',
		'align-items':'center',
		fontSize:20,
		color:'white',
	}
})

function getPlayer(id, props){
	for(let i = 0; i < props.players.length; i++){
		if(id===props.players[i].id){
			return props.players[i]
		}
	}
}

const ConnectedMatchMini = (props) => {
	const classes = useStyles(props);
	return(
		<div className={classes.matchWrapper}>
			{getPlayer(props.matches[props.matchRound].Matches[props.nmb].player1, props).charName} vs {getPlayer(props.matches[props.matchRound].Matches[props.nmb].player2, props).charName}
		</div>
	)
}

const MatchMini = connect(mapStateToProps)(ConnectedMatchMini);

export default MatchMini;
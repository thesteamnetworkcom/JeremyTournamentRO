import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MatchWinSelect from './MatchWinSelect';

const mapStateToProps = state => {
	return {
		matches:state.matches,
		players:state.players,
	}
};

const mapDispatchToProps = (dispatch) => {
	return{
		updateMatch: (match, index, group, target, wins) =>dispatch({
			type: "UPDATEMATCHM",
			details:{
				match:match,
				index:index,
				group:group,
				target:target,
				wins:wins
			}
		})
	}
}

const styles = () => ({
	wrapper:{
		height:'50%',
		display:'flex',
		'& >*':{
			'flex-grow':1
		},
		'justify-content':'center',
		'align-items':'center',
		color:'white',
		fontSize:20,
	}
})

function getPlayer(id, props){
	for(let i = 0; i < props.players.length; i++){
		if(id===props.players[i].id){
			return props.players[i]
		}
	}
}

const ConnectedMatchLarge = (props) => {
	const { classes } = props;
	const [state, setState] = useState({
		player1wins:props.match.player1wins,
		player2wins:props.match.player2wins
	})
	const handleChange = (tgt, event) => {
		props.updateMatch(
			props.match,
			props.index,
			props.group,
			tgt,
			event.target.value
		)
		setState({
			...state,
			[tgt]:event.target.value
		})
	}
	return(
		<div className={classes.wrapper}>
			<MatchWinSelect tgt="player1wins" change={handleChange} curWins={state.player1wins}/>
			<span>{getPlayer(props.match.player1, props).name}</span> 
			<span>vs</span>
			<span>{getPlayer(props.match.player2, props).name}</span>
			<MatchWinSelect tgt="player2wins" change={handleChange} curWins={state.player2wins}/>
		</div>
	)
}

const MatchLarge = connect(mapStateToProps,mapDispatchToProps)(ConnectedMatchLarge);

export default withStyles(styles)(MatchLarge);
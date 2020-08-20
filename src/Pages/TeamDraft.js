import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import PlayerSelect from '../Components/PlayerSelect';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
		matches:state.matches,
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		submit:players => dispatch({
			type: "SUBMITPLAYERS",
			players: players
		}),
		schedule:() => dispatch({
			type: "PAIRREMAININGMATCHES",
		}),
		clearTeams:() => dispatch({
			type: "CLEARTEAMS",
		}),
		selectPlayers:(event, oldID, val, opponent, oldOpponent) => dispatch({
			type: "SELECTPLAYERS",
			details:{
				event:event,
				oldID:oldID,
				val:val,
				opponent:opponent,
				oldOpponent:oldOpponent,
			}
		})
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
	captainRow:{
		display:'flex',
		'& >*':{
			'flex-grow':1
		},
		padding:5
	},
	rowTwo:{
		display:'flex',
		'& >*':{
			'flex-grow':1
		},
		padding:5
	},
	rowThree:{
		display:'flex',
		'& >*':{
			'flex-grow':1
		},
		padding:5
	},
	rowFour:{
		display:'flex',
		'& >*':{
			'flex-grow':1
		},
		padding:5
	},
	rowLabel:{
		width:'30%',
		fontSize:20,
		color:'white',
	},
	bottomSpace:{
		marginBottom:10
	},
	topSpace:{
		marginTop:10
	}
})

const ConnectedTeamDraft = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"TeamDraft",
		players:props.players
	})
	const handleChange = (event, oldID, val) => {
		event.persist();
				let opponent;
				let oldOpponent;
				for(let i = 0; i < props.matches.matchOne.Matches.length; i++){
					if(props.matches.matchOne.Matches[i].player1 === event.target.value){
						opponent = props.matches.matchOne.Matches[i].player2
					}
					if(props.matches.matchOne.Matches[i].player2 === event.target.value){
						opponent = props.matches.matchOne.Matches[i].player1
					}
					if(props.matches.matchOne.Matches[i].player1 === oldID){
						oldOpponent = props.matches.matchOne.Matches[i].player2;
					}
					if(props.matches.matchOne.Matches[i].player2 === oldID){
						oldOpponent = props.matches.matchOne.Matches[i].player1
					}
				}
				props.selectPlayers(event, oldID, val, opponent, oldOpponent);
		
		
	}
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			{Object.keys(props.players).length === 0 ? "" :
			<>
			<div className={classes.captainRow}>
				<div className={classes.rowLabel}>Captain:</div>
				<PlayerSelect change={handleChange} val={1} players={props.players} />
				<PlayerSelect change={null} val={11} players={props.players} disabled/>
			</div>
			<div className={classes.rowTwo}>
				<div className={classes.rowLabel}>Nmbr Two:</div>
				<PlayerSelect change={handleChange} val={2} players={props.players} />
				<PlayerSelect change={null} val={12} players={props.players} disabled/>
			</div>
			<div className={classes.rowThree}>
				<div className={classes.rowLabel}>Nmbr Three:</div>
				<PlayerSelect change={null} val={17} players={props.players} disabled/>
				<PlayerSelect change={handleChange} val={7} players={props.players} />
			</div>
			<div className={classes.rowFour}>
				<div className={classes.rowLabel}>Nmbr Four:</div>
				<PlayerSelect change={handleChange} val={4} players={props.players} />
				<PlayerSelect change={null} val={14} players={props.players} disabled />
			</div>
			</>
			}
		</div>
	)
}

const TeamDraft = connect(mapStateToProps, mapDispatchToProps)(ConnectedTeamDraft);

export default withStyles(styles)(TeamDraft);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import PlayerSelect from '../Components/PlayerSelect';
import TeamDraftRow from '../Components/TeamDraftRow';
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
					<TeamDraftRow 
						label="Captain"
						handleChange={handleChange}
						val={1}
						players={props.players}
						handleChange2={null}
						val2={11}
						skewPos
					/>
					<TeamDraftRow
						label="Player 2"
						handleChange={handleChange}
						val={2}
						players={props.players}
						handleChange2={null}
						val2={12}
					/>
					<TeamDraftRow
						label="Player 3"
						handleChange={null}
						val={17}
						players={props.players}
						handleChange2={handleChange}
						val2={7}
						skewPos
					/>
					<TeamDraftRow
						label="Player 4"
						handleChange={handleChange}
						val={4}
						players={props.players}
						handleChange2={null}
						val2={14}
					/>
				</>
			}
		</div>
	)
}

const TeamDraft = connect(mapStateToProps, mapDispatchToProps)(ConnectedTeamDraft);

export default withStyles(styles)(TeamDraft);
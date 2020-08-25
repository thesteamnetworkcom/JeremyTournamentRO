import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import ConspiracyPodMini from '../Components/ConspiracyPodMini';
import ConspiracyPodMiniV2 from '../Components/ConspiracyPodMiniV2';
import Conspiracy4v4Mini from '../Components/Conspiracy4v4Mini';
import Conspiracy4v4MiniV2 from '../Components/Conspiracy4v4MiniV2';
import Theme from '../Theme/Theme';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
		matches:state.matches,
	}
}

const styles = (Theme) => ({
	playerCard:{
		'margin-bottom':10,
		padding:10,
		display:'flex',
		'&> div':{
			'flex-grow':1
		},
		'&> span':{
			'width':80,
		}
	},
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
	fullWidth:{
		'width':'100%'
	},
	notes:{
		color:'white',
		fontSize:20,
	},
	miniMatches:{
		'flex-grow':1,
		display:'flex',
		[Theme.breakpoints.down('sm')]:{
			'flex-direction':'column',
		}
	},
	leftSide:{
		width:'50%',
		height:'100%',
		display:'flex',
		[Theme.breakpoints.down('sm')]:{
			width:'100%',
			height:'50%',
			'flex':'1 0 50%',
			'align-items':'stretch',
		}
	},
	rightSide:{
		width:'50%',
		height:'100%',
		display:'flex',
		[Theme.breakpoints.down('sm')]:{
			width:'100%',
			height:'50%',
			'flex':'1 0 50%',
			'align-items':'stretch',
		}
	},
	mHeader:{
		width:'50%',
		display:'inline-block',
		[Theme.breakpoints.down('sm')]:{
			display:'none',
		}
	}
})

const ConnectedConspiracyDraft = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"ConspiracyDraft",
	})
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			<div className={classes.notes}>
				<div>3x Conspiracy Packs</div>
				<div>Standard draft rules: Left, Right, Left</div>
				<div>40 card minimum deck</div>
				<div>Conspiracies are not legal in combined rounds.</div>
			</div>
			<div>
				<span className={classes.mHeader}>Pods</span>
				<span className={classes.mHeader}>4 v 4</span>
			</div>
			{Object.keys(props.players).length === 0 || Object.keys(props.matches).length === 0 ? "" :
			<>
			<div className={classes.miniMatches}>
				<div className={classes.leftSide}>
					<ConspiracyPodMiniV2
						players={props.players}
						group={
						[props.matches.conspiracyPod.Matches[0].player1,
						 props.matches.conspiracyPod.Matches[0].player2,
						 props.matches.conspiracyPod.Matches[0].player3,
						 props.matches.conspiracyPod.Matches[0].player4]}
					/>
					<ConspiracyPodMiniV2
						players={props.players}
						group={
						[props.matches.conspiracyPod.Matches[1].player1,
						 props.matches.conspiracyPod.Matches[1].player2,
						 props.matches.conspiracyPod.Matches[1].player3,
						 props.matches.conspiracyPod.Matches[1].player4]}
					/>
				</div>
				<div className={classes.rightSide}>
					<Conspiracy4v4MiniV2 players={props.players} 
				team1={[
					props.matches.conspiracy4v4.Matches[0].player1,
					props.matches.conspiracy4v4.Matches[0].player2,
					props.matches.conspiracy4v4.Matches[0].player3,
					props.matches.conspiracy4v4.Matches[0].player4,
				]}
				team2={[
					props.matches.conspiracy4v4.Matches[0].player5,
					props.matches.conspiracy4v4.Matches[0].player6,
					props.matches.conspiracy4v4.Matches[0].player7,
					props.matches.conspiracy4v4.Matches[0].player8,
				]}
					/>
				</div>
			</div>
			</>
			}
		</div>
	)
}

const ConspiracyDraft = connect(mapStateToProps)(ConnectedConspiracyDraft);

export default withStyles(styles)(ConspiracyDraft);
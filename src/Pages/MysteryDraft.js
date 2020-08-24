import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import MatchMini from '../Components/MatchMini';
import MatchMiniV2 from '../Components/MatchMiniV2';
import Divider from '@material-ui/core/Divider';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
		matches:state.matches,
	}
}

const styles = (props) => ({
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
	},
	leftSide:{
		width:'50%',
	},
	rightSide:{
		width:'50%',
	},
	mHeader:{
		width:'50%',
		display:'inline-block',
	}
})

const ConnectedMysteryDraft = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"MysteryDraft",
	})
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			<div className={classes.notes}>
				<div>3x Mystery Booster packs</div>
				<Divider/>
				<div>Standard draft rules: Left, Right, Left</div>
				<Divider/>
				<div>40 card minimum deck. Remaining pool is sideboard.</div>
				<Divider/>
				<div>No decklists. Swap cards between matches freely</div>
				<Divider/>
			</div>
			<div>
				<span className={classes.mHeader}>Match Three</span>
				<span className={classes.mHeader}>Match Four</span>
			</div>
			<div className={classes.miniMatches}>
				<div className={classes.leftSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.matchThree.Matches.map((el, index) =>
							index < 4 ?
								<MatchMiniV2 matchRound="matchThree" key={index} nmb={index} quarter/> : ''
						)
					}
				</div>
				<div className={classes.rightSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.matchFour.Matches.map((el, index) =>
							index < 4 ?
								<MatchMiniV2 matchRound="matchFour" key={index} nmb={index} quarter/> : ''
						)
					}
				</div>
			</div>
		</div>
	)
}

const MysteryDraft = connect(mapStateToProps)(ConnectedMysteryDraft);

export default withStyles(styles)(MysteryDraft);
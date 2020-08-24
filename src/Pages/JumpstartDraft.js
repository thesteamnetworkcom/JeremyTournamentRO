import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import MatchMini from '../Components/MatchMini';
import MatchMiniV2 from '../Components/MatchMiniV2';
import Theme from '../Theme/Theme';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
		matches:state.matches
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		pair: () => dispatch({
			type: "PAIRMATCHONE",
		})
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
		[Theme.breakpoints.down('sm')]:{
			width:'100%',
			height:'50%',
		}
	},
	rightSide:{
		width:'50%',
		[Theme.breakpoints.down('sm')]:{
			width:'100%',
			height:'50%',
		}
	}
})

const ConnectedJumpstartDraft = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"JumpstartDraft",
	})
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			<div className={classes.notes}>
				<div>
					3x Jumpstart Packs
				</div>
				<Divider/>
				<div>
					Select your favorite 2 packs and shuffle them together to create your draft deck.
				</div>
				<Divider/>
				<div>
					No substituting. No sideboards.
				</div>
				<Divider/>
			</div>
			<div className={classes.miniMatches}>
				<div className={classes.leftSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.matchOne.Matches.map((el, index) =>
							index < 2 ?
								<><MatchMiniV2 matchRound="matchOne" key={index} nmb={index} /><Divider/></> : ''
						)
					}
				</div>
				<div className={classes.rightSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.matchOne.Matches.map((el, index) =>
							index > 1 ?
								<><MatchMiniV2 matchRound="matchOne" key={index} nmb={index} /><Divider/></>: ''
						)
					}
				</div>
			</div>
		</div>
	)
}

const JumpstartDraft = connect(mapStateToProps, mapDispatchToProps)(ConnectedJumpstartDraft);

export default withStyles(styles)(JumpstartDraft);
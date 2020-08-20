import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from '../Components/Header';
import Divider from '@material-ui/core/Divider';
import MatchMini from '../Components/MatchMini';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
		matches:state.matches,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		pairFinalsRound1:(players) => dispatch({
			type: "PAIRFINALSROUND1",
			players:players
		})
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
	middle:{
		width:'100%',
	},
	mHeader:{
		width:'100%',
		display:'inline-block',
	}
})

const ConnectedDeckBuildingThree = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"DeckBuildingThree",
	})
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			<div className={classes.notes}>
				<div>1x Double Masters pack</div>
				<div>60 card deck constructed</div>
				<div>Pool: 3x jumpstart packs, mystery booster draft pool, Conspiracy draft pool, 3x double masters pack</div>
				<div>15 card sideboard</div>
			</div>
			<Button color="primary" variant="contained" className={classes.fullWidth} onClick={()=>props.pairFinalsRound1(props.players)}>
				Pair Finals Round 1
			</Button>
			<div className={classes.miniMatches}>
				<div className={classes.leftSide}>
					{Object.keys(props.matches).length === 0 ? "" :
				props.matches.finalsRoundOne !== undefined ?
					props.matches.finalsRoundOne.Matches.map((el, index)=>
						index < 2 ? 
							<MatchMini matchRound="finalsRoundOne" key={index} nmb={index} /> : ''
					) : ''
			}
				</div>
				<div className={classes.rightSide}>
					{Object.keys(props.matches).length === 0 ? "" :
				props.matches.finalsRoundOne !== undefined ?
					props.matches.finalsRoundOne.Matches.map((el, index)=>
						index > 1 ? 
							<MatchMini matchRound="finalsRoundOne" key={index} nmb={index} /> : ''
					) : ''
			}
				</div>
			</div>
		</div>
	)
}

const DeckBuildingThree = connect(mapStateToProps, mapDispatchToProps)(ConnectedDeckBuildingThree);

export default withStyles(styles)(DeckBuildingThree);
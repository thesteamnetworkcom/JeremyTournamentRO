import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import MatchMini from '../Components/MatchMini';
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
		width:'33.33%',
	},
	rightSide:{
		width:'33.33%',
	},
	middle:{
		width:'33.33%'
	},
	mHeader:{
		width:'33.33%',
		display:'inline-block',
	}
})

const ConnectedDeckBuildingOne= (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"DeckBuildingOne",
	})
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			<div className={classes.notes}>
				<div>1x Double Masters pack</div>
				<Divider/>
				<div>60 card deck constructed</div>
				<Divider/>
				<div>Pool: 3x jumpstart packs, mystery booster draft pool, 1x double masters pack</div>
				<Divider/>
				<div>15 card sideboard</div>
				<Divider/>
			</div>
			<div>
				<span className={classes.mHeader}>Match Five</span>
				<span className={classes.mHeader}>Match Six</span>
				<span className={classes.mHeader}>Match Seven</span>
			</div>
			<div className={classes.miniMatches}>
				<div className={classes.leftSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.matchFive.Matches.map((el, index) =>
							index < 4 ?
								<MatchMini matchRound="matchFive" key={index} nmb={index} quarter/> : ''
						)
					}
				</div>
				<div className={classes.rightSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.matchSix.Matches.map((el, index) =>
							index < 4 ?
								<MatchMini matchRound="matchSix" key={index} nmb={index} quarter/> : ''
						)
					}
				</div>
				<div className={classes.middle}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.matchSeven.Matches.map((el, index) =>
							index < 4 ?
								<MatchMini matchRound="matchSeven" key={index} nmb={index} quarter/> : ''
						)
					}
				</div>
			</div>
		</div>
	)
}

const DeckBuildingOne = connect(mapStateToProps)(ConnectedDeckBuildingOne);

export default withStyles(styles)(DeckBuildingOne);
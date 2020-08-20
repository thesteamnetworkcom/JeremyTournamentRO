import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from '../Components/Header';
import MatchLarge from '../Components/MatchLarge';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
		matches:state.matches,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		pairFinalsRound3:()=>dispatch({
			type:"PAIRFINALSROUND3",
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
	largeMatches:{
		'flex-grow':1,
		display:'flex',
		fontSize:20,
		color:'white',
	},
	leftSide:{
		width:'50%',
		padding:5,
	},
	rightSide:{
		width:'50%',
		padding:5,
	},
})

const ConnectedFinalRound2 = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"FinalRound2",
	})
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			<div className={classes.largeMatches}>
				<div className={classes.leftSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.finalsRoundTwo.Matches.map((el,index)=>
							index < 2 ?
								<MatchLarge match={el} index={index} key={index} group="finalsRoundTwo" /> : ''
						)
					}
				</div>
				<div className={classes.rightSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.finalsRoundTwo.Matches.map((el,index)=>
							index > 1 ?
								<MatchLarge match={el} index={index} key={index} group="finalsRoundTwo" /> : ''
						)
					}
				</div>
			</div>
		</div>
	)
}

const FinalRound2 = connect(mapStateToProps, mapDispatchToProps)(ConnectedFinalRound2);

export default withStyles(styles)(FinalRound2);
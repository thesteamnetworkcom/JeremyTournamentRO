import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import MatchLarge from '../Components/MatchLarge';
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
		pairFinalsRound2:()=>dispatch({
			type:"PAIRFINALSROUND2",
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

const ConnectedFinalRound1 = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"FinalRound1",
	})
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			<div className={classes.largeMatches}>
				<div className={classes.leftSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.finalsRoundOne.Matches.map((el,index)=>
							index < 2 ?
								<MatchLarge match={el} index={index} key={index} group="finalsRoundOne" /> : ''
						)
					}
				</div>
				<div className={classes.rightSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.finalsRoundOne.Matches.map((el,index)=>
							index > 1 ?
								<MatchLarge match={el} index={index} key={index} group="finalsRoundOne" /> : ''
						)
					}
				</div>
			</div>
		</div>
	)
}

const FinalRound1 = connect(mapStateToProps, mapDispatchToProps)(ConnectedFinalRound1);

export default withStyles(styles)(FinalRound1);